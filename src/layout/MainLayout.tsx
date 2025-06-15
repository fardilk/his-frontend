import { Link, Outlet } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'

const MainLayout: React.FC = () => {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li>
            <Link to="/homepage">Homepage</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/admission">Admission</Link>
          </li>
          <li>
            <Link to="#">Config</Link>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </aside>
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
