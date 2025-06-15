import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'

const Homepage: React.FC = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li>
            <Link to="/homepage">Dashboard</Link>
          </li>
          <li>
            <Link to="/admission">Admission</Link>
          </li>
          <li>
            <Link to="#">Settings</Link>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </aside>
      <div className="main">
        <div className="navbar">
          <span>Welcome, {user?.name}</span>
        </div>
        <div className="content">
          <h1>Dashboard</h1>
          <p>This is your admin dashboard.</p>
        </div>
      </div>
    </div>
  )
}

export default Homepage
