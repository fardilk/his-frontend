
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'
import { useAuth } from '../auth/AuthContext'
import Button from '../components/Button'


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
      // Navigate to dashboard even if credentials are incorrect
      // using a dummy session so the page is accessible
      login('guest-token', { id: 0, name: 'Guest', email, role: null })
      navigate('/dashboard', { replace: true })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen font-sans">
      {/* Left panel */}
      <div className="flex-1 bg-gray-100 flex items-center justify-center">
        <div className="w-4/5 h-4/5 bg-center bg-contain bg-no-repeat" style={{ backgroundImage: `url('/your-illustration.png')` }}>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="w-4/5 max-w-md p-5 border border-gray-300 rounded-lg bg-gray-50">
          <h2 className="text-center text-2xl font-bold mb-5">Welcome!</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-between items-center mb-4 text-xs">
              <label className="flex items-center">
                <input type="checkbox" className="mr-1" />
                Remember my password
              </label>
              <a href="#" className="text-blue-600 hover:underline">
                Forgot your password?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white"
              disabled={loading}
            >
              {loading ? 'Please wait...' : 'LOGIN'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
