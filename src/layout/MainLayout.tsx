import { Link, Outlet } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import Sidebar from '../components/Sidebar'

const MainLayout: React.FC = () => {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main">
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
      </div>
    </div>
  )
}

export default MainLayout
