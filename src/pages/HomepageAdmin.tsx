import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'

const HomepageAdmin: React.FC = () => {
  const navigate = useNavigate()
  const { logout } = useAuth()

  const handleLogout = () => {
    logout(() => navigate('/login'))
  }

  return (
    <div>
      <h1>Admin Homepage</h1>
      <p>Welcome, administrator!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default HomepageAdmin
