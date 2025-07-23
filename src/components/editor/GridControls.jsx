import { PiDotsNineBold, PiGitBranch, PiMagnet } from 'react-icons/pi'
import { useAppStore} from './../../store/app'
import { useShallow } from 'zustand/shallow'

const GridControls = () => {

  // Get global settings
  // setProperty is a method to update specific properties in the store
  const {showGrid, snapToGrid, autoLayout, setProperty} = useAppStore(useShallow(state => ({showGrid: state.showGrid, autoLayout: state.autoLayout, snapToGrid: state.snapToGrid, setProperty: state.setProperty})))

  const handleGridShow = () => {
    setProperty('showGrid', !showGrid)
  }

  const handleSnapToGrid = () => {
    setProperty('snapToGrid', !snapToGrid)
  }

  const handleAutoLayout = (dir) => {
    const updateAutoLayoutProp = {
      active: (dir === autoLayout.direction && autoLayout.active) ? false : true,
      direction: dir
    }
    setProperty('autoLayout', updateAutoLayoutProp)
  }

  return (
    <div className='absolute left-4 bottom-4 flex gap-2 items-center'>
        <div className='bg-white border p-1 rounded-md flex items-center gap-0.5'>
          <button onClick={handleGridShow} className={'hover:bg-gray-100 active:bg-gray-200 rounded px-2 py-1.5 ' + (showGrid && 'bg-gray-100 ')}><PiDotsNineBold size={18} /></button>
          <button onClick={handleSnapToGrid} className={' hover:bg-gray-100 active:bg-gray-200 px-2 py-1.5 rounded ' + (snapToGrid && 'bg-gray-100')}><PiMagnet size={18}/></button>
          <button onClick={() => handleAutoLayout("down")} className={' hover:bg-gray-100 active:bg-gray-200 px-2 py-1.5 rounded ' + (autoLayout.active && autoLayout.direction === 'down' && 'bg-gray-100')}><PiGitBranch size={18}/></button>
          
          {/* Additional auto layout option from left to right */}
          <button onClick={() => handleAutoLayout("right")} className={' hover:bg-gray-100 active:bg-gray-200 px-2 py-1.5 rounded ' + (autoLayout.active && autoLayout.direction === 'right' && 'bg-gray-100')}><PiGitBranch  className='-rotate-90' size={18}/></button>
        </div>
        {autoLayout.active &&
        <div className='bg-yellow-100 border border-yellow-300 px-2 py-1.5 rounded-md flex items-center'>
          <span className='text-xs font-semibold text-yellow-900'>Auto Layout: On</span>
        </div>
        }
    </div>
  )
}

export default GridControls