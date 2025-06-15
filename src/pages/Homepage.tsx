import React from 'react'
import { useNavigate } from 'react-router-dom'
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
      <div className="content">
        <h1>Welcome, {user?.name}</h1>
        <p>This is your admin dashboard.</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Homepage
