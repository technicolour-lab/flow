import { useEffect, useState, useCallback, useRef } from "react";
import { useEdgesState, useNodesState, addEdge} from "@xyflow/react";
import { apiGetFlow, apiUpdateFlow } from "../services/flowService";
import { nanoid } from "nanoid";
import useDebounce from "./useDebounce";
import * as dagre from '@dagrejs/dagre';
import { useAppStore } from "../store/app";
import { useShallow } from "zustand/shallow";

const useFlow = (flowId) => {

  // State for holding the flow object
  const [flow, setFlow] = useState(null);

  // State and handler for managing nodes of the flow
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // State for tracking the loading and error status - used for api
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get autolayout property from store settings
  const {autoLayout: autoLayoutProp} = useAppStore(useShallow(state => ({autoLayout: state.autoLayout})))

  // Keep reference to current nodes state and autolayout settings
  const nodesRef = useRef([]);
  const edgesRef = useRef([]);
  const autoLayoutPropRef = useRef(autoLayoutProp);

  useEffect(() => {
    setLoading(true)

    const fetchFlow = async () => {
      try {
        // Fetch flow data from the API
        const flowData = await apiGetFlow(flowId);
        
        // If no data is returned 
        if (!flowData) {
          setFlow(undefined);
          return;
        };

        // Update state with the fetched flow details
        setFlow({
          id: flowData.id, 
          name: flowData.name, 
          group: flowData.group, 
          updatedAt: flowData.updatedAt
        });
        setNodes(flowData.nodes);
        setEdges(flowData.edges);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFlow();
  }, [flowId]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({...params, type: 'custom', animated: true, data: {color: "gray", strokeWidth: 1}}, eds)),
    [setEdges],
  );

  const addNode = (type, position, data = {}) => {
    const id = nanoid(8)
    const label = type.charAt(0).toUpperCase() + type.slice(1)
    
    // If autolayout active calculate layout before node is added to the state
    if(autoLayoutProp.active) {
      
      // Add default measured property for auto layout calculation
      const newNode = {id: id, type: type, position: {x: position.x, y:position.y}, measured: {width: 82, height: 82}, data: {label: label, color: "gray", ...data}}
      const updatedNodes = [...nodes, newNode]

      // Perform autolayout before node is added
      let autoLayoutUpdatedNodes = autoLayout(updatedNodes, edges, autoLayoutProp);

      // Update nodes
      setNodes(autoLayoutUpdatedNodes);

    } else {
      const newNode = {id: id, type: type, position: {x: position.x, y:position.y}, data: {label: label, color: "gray", ...data}}
      // Update nodes
      setNodes(prev => {
        const updatedNodes = [...prev, newNode] 
        updateStorage({nodes: updatedNodes})
        return updatedNodes
      })
    }
    
  }

  const changeName = (updatedName) => {
    setFlow(prev => ({...prev, name: updatedName}))
  }

  const updateNode = (nodeId, data) => {
    setNodes(prev => prev.map(node => {
      if(node.id === nodeId) {
        return {...node, data: {...node.data, ...data}}
      } 
      return node
    }))
  }

  const updateEdge = (edgeId, data) => {
    setEdges(prev => prev.map(edge => {
      if(edge.id === edgeId) {
        return {...edge, ...data}
      } 
      return edge
    }))
  }

  const updateDataEdge = (edgeId, data) => {
    setEdges(prev => prev.map(edge => {
      if(edge.id === edgeId) {
        return {...edge, data: {...edge.data, ...data}}
      } 
      return edge
    }))
  }
  
  const updateStorage = () => {
    setLoading(true);
    try {
      const flowData = {
        name: flow.name,
        nodes: nodes, 
        edges: edges, 
        updatedAt: Date.now()
      }
      apiUpdateFlow(flowId, flowData)
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  // Debounce function to send data to api
  const debounceUpdate = useDebounce(updateStorage, 400);

  useEffect(() => {
    // On every change update localstorage
    debounceUpdate();
  }, [nodes, edges, flow])


  // Helper function to find out changes in position or structure of nodes
  const checkNodesChange = useCallback(() => {
    // We will only compare position of nodes, we dont need to check if it's selected for example
    const prevNodes = nodesRef.current.map(({ id, position }) => ({ id, position }));
    const currentNodes = nodes.map(({ id, position }) => ({ id, position }));

    // Detect change
    const hasChanged = JSON.stringify(prevNodes) !== JSON.stringify(currentNodes)

    return hasChanged;
  },[nodes])

  // Helper function to find out changes in position or structure of edges
  const checkEdgesChange = useCallback(() => {
    // We will only compare the existence of edges
    const prevEdges = edgesRef.current.map(({ id}) => ({ id }));
    const currentEdges = edges.map(({ id }) => ({ id }));
    const hasChanged = JSON.stringify(prevEdges) !== JSON.stringify(currentEdges)
    
    return hasChanged;
  },[edges])

  // Helper function to check if node exisit by id
  const nodeExsist = useCallback((id) => {
    return nodes.find(n => n.id == id);
  },[nodes])

  const autoLayout = useCallback((prevNodes, prevEdges, autoProp) => {

    // Define direction of autolayout
    const direction = {
      "right": "LR",
      "down": "TB",
    }

    // Create graph and calculate new position for autolayout
    let g = new dagre.graphlib.Graph();
    g.setGraph({
      rankdir: direction[autoProp.direction] ,
      nodesep: 60,
      ranksep: 100
    });
    g.setDefaultEdgeLabel(function() { return {}; });

    // Add node to the graph - except text node that does not have handlers
    prevNodes.forEach((n) => {
      if(n.type !== "annotation") {
        g.setNode(n.id, { label: n.id,  width: n.measured.width, height: n.measured.height });
      }
    });

    // Add each connection to the graph
    prevEdges.forEach((e) => {
      const sourceExsist = nodeExsist(e.source)
      const targetExsist = nodeExsist(e.target)
      if(sourceExsist && targetExsist){
        g.setEdge(e.source, e.target);
      }
    });

    // Calculate layout
    dagre.layout(g);

    // Apply new position to each node
    const updatedNodes = prevNodes.map(node => {
      const updatedNode = g.nodes().find(v => v == node.id);
      let dagreNode = g.node(updatedNode);
      return updatedNode ? {...node, position: {x: dagreNode.x, y: dagreNode.y }} : node
    })

    return updatedNodes;
  },[nodeExsist])



  // Detect the change in nodes or edges and apply autolayout if active
  useEffect(() => {

    // Skip if there are no nodes
    if(nodes.length === 0) return;

    // Skip if autoLayout not active
    if(!autoLayoutProp.active) return;

    // Check if any node doesn't have the 'measured' property
    // measured is set by ReactFlow after node is added
    const notMeasured = nodes.some((n) => !Object.prototype.hasOwnProperty.call(n, 'measured'));
   
     // Skip if there are any nodes without measured - it's needed for layout calculation
    if(notMeasured) return;

    // Check if there was any changes in nodes position
    const nodesChange = checkNodesChange(nodesRef.current, nodes);
   
    // Check if there was any changes in edges (new or delete)
    const edgesChange = checkEdgesChange(nodesRef.current, nodes);

    // Check if there was change in autoLayoutProp
    const autoPropChange = autoLayoutPropRef.current.direction !== autoLayoutProp.direction

    // Skip 
    // if there was no changes in position of nodes
    // if there was no changes in edges structure
    // if there was no changes autoLayout direction
    if(!nodesChange && !edgesChange && !autoPropChange) return;

    // Perform autoLayout calculation
    let updatedNodes = autoLayout(nodes, edges, autoLayoutProp);

    // Update nodes
    setNodes(updatedNodes);

    // Update refs
    nodesRef.current = updatedNodes;
    edgesRef.current = edges;
    autoLayoutPropRef.current = autoLayoutProp;

  }, [nodes, edges, autoLayoutProp, autoLayout, checkEdgesChange, checkNodesChange])

  return {
    flow,
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    changeName,
    onConnect,
    addNode,
    updateNode,
    updateEdge,
    updateDataEdge,
    loading, 
    error
  }
}

export default useFlow;