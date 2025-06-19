import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../auth/AuthContext'

interface MenuItem {
  path?: string
  label: string
  icon: string
  action?: () => void
}

const menusByRole: Record<string, MenuItem[]> = {
  Administrator: [
    { path: '/dashboard', label: 'Dashboard', icon: 'fa-solid fa-chart-line' },
    { path: '/admission', label: 'Admission', icon: 'fa-solid fa-hospital-user' },
    { path: '/config', label: 'Config', icon: 'fa-solid fa-sliders' },
  ],
  Admisi: [
    { path: '/admission', label: 'Admission', icon: 'fa-solid fa-hospital-user' },
  ],
  Dokter: [
    { path: '/dashboard', label: 'Dashboard', icon: 'fa-solid fa-chart-line' },
  ],
}

const Sidebar: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const initialRole =
    typeof user?.role === 'string' ? user.role : user?.role?.name || 'Administrator'
  const [role, setRole] = useState<string>(initialRole)

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value)
  }

  const name = user?.name || 'Administrator'
  const currentRole = role

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  const menuItems: MenuItem[] = [
    ...(menusByRole[currentRole] ?? []),
    { label: 'Logout', icon: 'fa-solid fa-right-from-bracket', action: handleLogout },
  ]

  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-gray-100 shadow overflow-auto p-4 space-y-4">
      {/* Profile Section */}
      <div className="flex flex-col items-center space-y-2">
        <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
          <i className="fa-solid fa-user text-gray-500 text-2xl" />
        </div>
        <div className="text-center">
          <div className="font-bold">{name}</div>
          <div className="text-sm text-gray-600">{currentRole}</div>
        </div>
      </div>

      {/* Role Switcher */}
      <div>
        <select
          value={role}
          onChange={handleRoleChange}
          className="w-full p-2 border rounded text-sm"
        >
          <option value="Administrator" disabled={currentRole === 'Administrator'}>
            Administrator
          </option>
          <option value="Admisi" disabled={currentRole === 'Admisi'}>
            Admisi
          </option>
          <option value="Dokter" disabled={currentRole === 'Dokter'}>
            Dokter
          </option>
        </select>
      </div>

      {/* Menu */}
      <nav>
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const active = item.path ? location.pathname.startsWith(item.path) : false
            return (
              <li key={item.label}>
                {item.path ? (
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-2 p-2 rounded hover:bg-gray-200 ${
                      active ? 'bg-blue-100' : ''
                    }`}
                  >
                    <i className={`${item.icon} w-4`} />
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <button
                    onClick={item.action}
                    className="flex items-center w-full space-x-2 p-2 rounded hover:bg-gray-200"
                  >
                    <i className={`${item.icon} w-4`} />
                    <span>{item.label}</span>
                  </button>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
