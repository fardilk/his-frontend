import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../auth/AuthContext'

interface MenuItem {
  path?: string
  label: string
  action?: () => void
}

const menusByRole: Record<'Administrator' | 'Admisi', MenuItem[]> = {
  Administrator: [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/admission', label: 'Admission' },
    { path: '/doctor', label: 'Doctor' },
  ],
  Admisi: [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/admission', label: 'Admission' },
  ],
}

const Sidebar: React.FC = () => {
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const [role, setRole] = useState<string>('Administrator')

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  const menuItems: MenuItem[] = [
    ...(menusByRole[role as 'Administrator' | 'Admisi'] || []),
    { label: 'Logout', action: handleLogout },
  ]

  return (
    <aside className="bg-white shadow-md rounded-none w-48 h-screen flex flex-col">
      <div className="flex items-center gap-2 p-3 border-b border-gray-200">
        <img
          src="/doctor.png"
          alt="Profile"
          className="w-[30px] h-[30px] object-cover rounded-md"
        />
        <div>
          <p className="text-sm font-semibold text-gray-800">{user?.name || 'John Doe'}</p>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>

      <div className="p-2">
        <label className="flex items-center gap-1 text-xs">
          <input
            type="checkbox"
            checked={role === 'Administrator'}
            onChange={() =>
              setRole(role === 'Administrator' ? 'Admisi' : 'Administrator')
            }
          />
          Switch Role
        </label>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map(item => (
            <li key={item.label} className="text-sm font-medium text-gray-700">
              {item.path ? (
                <Link
                  to={item.path}
                  className="flex items-center gap-2 p-2 text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={item.action}
                  className="flex items-center gap-2 w-full text-left p-2 text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
