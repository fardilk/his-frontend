import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const MainLayout: React.FC = () => {
  const handleCollapse = () => {
    // placeholder for sidebar collapse logic
    console.log('collapse sidebar')
  }

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar onCollapse={handleCollapse} />
        <main className="flex-1 p-4 bg-gray-50 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default MainLayout
