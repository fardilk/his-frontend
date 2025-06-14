import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'

const Login = () => {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()
  const auth = useAuth()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    auth.login(username, () => navigate('/'))
  }

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Login</h2>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <button type="submit">Login</button>
    </form>
  )
}

export default Login
