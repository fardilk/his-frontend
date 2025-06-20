import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../auth/AuthContext'

const Sidebar: React.FC = () => {
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const initialRole =
    typeof user?.role === 'string' ? user.role : user?.role?.name || 'Administrator'
  const [role, setRole] = useState<string>(initialRole)

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <aside className="bg-white shadow-lg rounded-lg p-4 w-64 h-full flex flex-col space-y-4">
      <div className="flex flex-col items-center">
        <img
          src="/doctor.png"
          alt="Profile"
          className="w-24 h-24 rounded-full border-2 border-gray-200 mb-2 object-cover"
        />
        <p className="font-semibold text-gray-700">{user?.name || 'John Doe'}</p>
        <p className="text-sm text-gray-400">{role}</p>
      </div>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-400 mb-4"
      >
        <option value="Administrator">Administrator</option>
        <option value="Admisi">Admisi</option>
        <option value="Dokter">Dokter</option>
      </select>

      <nav className="flex-1">
        <ul>
          <li>
            <button
              onClick={handleLogout}
              className="p-2 rounded-md hover:bg-gray-100 cursor-pointer text-sm font-medium text-gray-700 transition-colors duration-200 w-full text-left"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
