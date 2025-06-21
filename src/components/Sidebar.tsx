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
    <aside className="bg-white shadow-lg w-56 h-screen flex flex-col rounded-r-xl overflow-hidden">
      <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <img
            src="/doctor.png"
            alt="Profile"
            className="w-8 h-8 rounded-md object-cover"
          />
          <div className="leading-none">
            <p className="text-sm font-medium text-gray-800">{user?.name || 'John Doe'}</p>
            <p className="text-xs text-gray-500">{role}</p>
          </div>
        </div>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border border-gray-200 rounded px-2 py-1 text-xs text-gray-600 bg-white"
        >
          <option value="Administrator">Administrator</option>
          <option value="Admisi">Admisi</option>
        </select>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map(item => (
            <li key={item.label}>
              {item.path ? (
                <Link
                  to={item.path}
                  className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={item.action}
                  className={
                    item.label === 'Logout'
                      ? 'w-full flex items-center justify-center p-2 text-sm text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-md'
                      : 'flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm transition-colors'
                  }
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
