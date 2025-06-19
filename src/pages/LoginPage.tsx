
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'
import { useAuth } from '../auth/AuthContext'

interface FormErrors {
  email?: string
  password?: string
}

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})

  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const validationErrors: FormErrors = {}
    if (!email) validationErrors.email = 'Email is required'
    if (!password) validationErrors.password = 'Password is required'

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors)
      return
    }
    setErrors({})
    setLoading(true)
    setErrorMessage('')

    try {
      const res = await api.post('/login', { email, password })
      const { token, user } = res.data
      login(token, user)
      navigate('/dashboard', { replace: true })
    } catch (err: any) {
      const message = err.response?.data?.message || 'Login failed'
      setErrorMessage(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      <div className="left-panel">
        <div className="illustration" />
      </div>
      <div className="right-panel">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Welcome!</h2>
          {errorMessage && <div className="error">{errorMessage}</div>}
          <div className="form-group">
            <input
              type="email"
              placeholder="Your E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>
          <div className="actions">
            <label className="remember">
              <input type="checkbox" /> Remember my password
            </label>
            <a href="#" className="forgot">
              Forgot your password?
            </a>
          </div>
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? 'Loading...' : 'LOGIN'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
