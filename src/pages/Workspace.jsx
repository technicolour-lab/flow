import {  NavLink, Outlet } from 'react-router-dom'
import useFlows from '../hooks/useFlows'
import Menu from '../components/workspace/Menu'
import useGroups from '../hooks/useGroups'
import { FiGitMerge } from 'react-icons/fi'

const Workspace = () => {

  const { flows, addFlow, deleteFlow, updateFlow, clearGroupInFlows} = useFlows();
  const { groups, addGroup, changeColor, deleteGroup } = useGroups();

  // const location = useLocation();
  // const isDocumentationPage = location.pathname.includes("documentation");

  return (
    <div className='flex min-h-svh w-full bg-white'>
      


      {/* Logo  */}
      <div className='fixed inset-y-0 left-0 w-60 bg-gray-50 border-r'>
      <nav className='flex h-full min-h-0 flex-col overflow-y-auto'>
        <div className='p-6 pb-2'>
            <NavLink to={'/landing'}>
              <div className='flex items-center gap-2'>
                <FiGitMerge />
                <div className="font-bold relative">
                  Flow
                </div>
              </div>
            </NavLink>
        </div>
        
        {/* Navigation */}
        <Menu groups={groups} addGroup={addGroup} changeColor={changeColor} deleteGroup={deleteGroup} clearGroupInFlows={clearGroupInFlows} />

        {/* Nav footer */}
        <div className='px-6'>
          {/* Documentation link removed */}
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