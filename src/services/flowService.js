import { handleApiError } from "./errorHandler";
import api from "./api";
import { initialFlows } from "../data/initialFlows";

const STORAGE_KEY_FLOWS = 'flow_flows';

// LocalStorage helpers
const getFlowsFromStorage = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY_FLOWS);
    if (stored) {
      const storedFlows = JSON.parse(stored);
      // Merge edges from initialFlows into stored flows if they match by ID
      const updatedFlows = storedFlows.map(storedFlow => {
        const initialFlow = initialFlows.find(initFlow => initFlow.id === storedFlow.id);
        if (initialFlow && initialFlow.edges && initialFlow.edges.length > 0) {
          // Update edges if the initial flow has edges and stored flow doesn't or has fewer
          if (!storedFlow.edges || storedFlow.edges.length === 0) {
            return { ...storedFlow, edges: initialFlow.edges };
          }
        }
        return storedFlow;
      });
      
      // If we updated any flows, save them back
      const hasUpdates = updatedFlows.some((flow, index) => 
        JSON.stringify(flow.edges) !== JSON.stringify(storedFlows[index].edges)
      );
      if (hasUpdates) {
        localStorage.setItem(STORAGE_KEY_FLOWS, JSON.stringify(updatedFlows));
        return updatedFlows;
      }
      
      return storedFlows;
    }
    // Initialize with sample data if empty
    localStorage.setItem(STORAGE_KEY_FLOWS, JSON.stringify(initialFlows));
    return initialFlows;
  } catch (error) {
    console.error('Error reading flows from localStorage:', error);
    return initialFlows;
  }
};

const saveFlowsToStorage = (flows) => {
  try {
    localStorage.setItem(STORAGE_KEY_FLOWS, JSON.stringify(flows));
  } catch (error) {
    console.error('Error saving flows to localStorage:', error);
    throw new Error('Failed to save flows');
  }
};

/*
Flow Table structure:

Column Name       Data Type
---------------------------
id                INT
name              TEXT
group             TEXT
nodes             JSON
edges             JSON
updatedAt         TIMESTAMP

*/

export const apiGetFlows = async () => {
  // Use localStorage if API is not configured
  if (!api) {
    return getFlowsFromStorage();
  }

  try {
    const response = await api.get('/flows');
    return response.data;
  } catch (error) {
    const errorMessage = handleApiError(error);
    throw new Error(errorMessage);
  }
}

export const apiAddFlow = async (data) => {
  // Use localStorage if API is not configured
  if (!api) {
    const flows = getFlowsFromStorage();
    const newFlow = {
      ...data,
      id: `flow_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`,
      updatedAt: Date.now()
    };
    flows.push(newFlow);
    saveFlowsToStorage(flows);
    return newFlow;
  }

  try {
    const response = await api.post(`/flows/`, data);
    return response.data;
  } catch (error) {
    const errorMessage = handleApiError(error);
    throw new Error(errorMessage);
  }
}

export const apiGetFlow = async (flowId) => {
  // Use localStorage if API is not configured
  if (!api) {
    const flows = getFlowsFromStorage();
    const flow = flows.find(f => f.id === flowId);
    if (!flow) {
      throw new Error('Flow not found');
    }
    return flow;
  }

  try {
    const response = await api.get(`/flows/${flowId}`);
    return response.data;
  } catch (error) {
    const errorMessage = handleApiError(error);
    throw new Error(errorMessage);
  }
}

export const apiUpdateFlow = async (flowId, data) => {
  // Use localStorage if API is not configured
  if (!api) {
    const flows = getFlowsFromStorage();
    const index = flows.findIndex(f => f.id === flowId);
    if (index === -1) {
      throw new Error('Flow not found');
    }
    flows[index] = { ...flows[index], ...data, updatedAt: Date.now() };
    saveFlowsToStorage(flows);
    return flows[index];
  }

  try {
    const response = await api.put(`/flows/${flowId}`, data);
    return response.data;
  } catch (error) {
    const errorMessage = handleApiError(error);
    throw new Error(errorMessage);
  }
}

export const apiDeleteFlow = async (flowId) => {
  // Use localStorage if API is not configured
  if (!api) {
    const flows = getFlowsFromStorage();
    const filtered = flows.filter(f => f.id !== flowId);
    if (filtered.length === flows.length) {
      throw new Error('Flow not found');
    }
    saveFlowsToStorage(filtered);
    return { success: true };
  }

  try {
    const response = await api.delete(`/flows/${flowId}`);
    return response.data;
  } catch (error) {
    const errorMessage = handleApiError(error);
    throw new Error(errorMessage);
  }
}
