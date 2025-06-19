import { Outlet } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import Sidebar from '../components/Sidebar'

const MainLayout: React.FC = () => {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="dashboard flex">
      <Sidebar />
      <main className="main flex-1">
        <div className="navbar">
          <span className="icon">🔔</span>
          <span className="icon">⚙️</span>
          <div className="profile">
            <span className="icon">👤</span>
            <span>{user?.name || 'Administrator'}</span>
          </div>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default MainLayout
