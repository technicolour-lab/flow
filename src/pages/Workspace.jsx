import {  NavLink, Outlet, useLocation } from 'react-router-dom'
import useFlows from '../hooks/useFlows'
import Menu from '../components/workspace/Menu'
import useGroups from '../hooks/useGroups'
import { PiDatabase } from 'react-icons/pi'
import { FiGitMerge } from 'react-icons/fi'
import { CgFileDocument } from 'react-icons/cg'

const Workspace = () => {

  const { flows, addFlow, deleteFlow, updateFlow, clearGroupInFlows} = useFlows();
  const { groups, addGroup, changeColor, deleteGroup, error: groupsError } = useGroups();

  const location = useLocation();
  const isDocumentationPage = location.pathname.includes("documentation");

  return (
    <div className='flex min-h-svh w-full bg-white'>
      {groupsError?.message &&
        <div className='absolute bottom-6 right-6 bg-red-100 border border-red-400 shadow-lg py-2 px-6 rounded-md text-sm font-medium'>
          {groupsError.message}
        </div>
      }
      {/* Demo info */}
      {!isDocumentationPage && 
        <div className='fixed right-6 top-6  text-xs font-normal text-gray-900 bg-gray-50 border border-gray-400 p-3 rounded flex items-center gap-1 z-10'>
          <PiDatabase /> This application uses <strong>Local Storage</strong> to store your data.
        </div>
      }

      {/* Logo  */}
      <div className='fixed inset-y-0 left-0 w-60 bg-gray-50 border-r'>
      <nav className='flex h-full min-h-0 flex-col overflow-y-auto'>
        <div className='p-6 pb-2'>
            <NavLink to={'/landing'}>
              <div className='flex items-center gap-2'>
                <FiGitMerge />
                <span className="font-bold text-gray-900">Flow</span>
              </div>
            </NavLink>
        </div>
        
        {/* Navigation */}
        <Menu groups={groups} addGroup={addGroup} changeColor={changeColor} deleteGroup={deleteGroup} clearGroupInFlows={clearGroupInFlows} />

        {/* Nav footer */}
        <div className='px-6'>
          <NavLink className="[&.active]:bg-gray-100 hover:bg-gray-100 px-2 py-1 rounded-md flex items-center gap-2 text-sm font-semibold text-gray-900" to={"documentation"} >
            <CgFileDocument /> Documentation
          </NavLink>
        </div>
        <div className='p-6'>
          <div className="rounded-xl border bg-white">
              <div className="space-y-1.5 p-4">
                <div className="font-semibold tracking-tight text-sm text-gray-900">Support</div>
                <div className="text-xs text-gray-900"> We are here to help.<br/><strong>team@technicolour.com.au</strong> if you need assistance.</div>
                </div>
              </div>
        </div>
        </nav>
      </div>

      {/* Main section */}
      <main className='flex-1 pl-60'>
        <div className='p-12 mx-auto lg:max-w-7xl flex flex-col justify-between h-full'>
          <Outlet context={{flows, addFlow, deleteFlow, groups, updateFlow}}></Outlet>
        </div>
      </main>
    </div>
  )
}

export default Workspace