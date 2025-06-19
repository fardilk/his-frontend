import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../auth/AuthContext'

const menuItems = [
  {
    path: '/rbac',
    label: 'Master Akses Kontrol',
    icon: 'fa-solid fa-user-shield',
  },
  {
    path: '/config',
    label: 'Master Konfigurasi',
    icon: 'fa-solid fa-sliders',
  },
]

const Sidebar: React.FC = () => {
  const location = useLocation()
  const { user } = useAuth()
  const initialRole =
    typeof user?.role === 'string' ? user.role : user?.role?.name || 'Administrator'
  const [role, setRole] = useState<string>(initialRole)

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value)
  }

  const name = user?.name || 'Administrator'
  const currentRole =
    typeof user?.role === 'string' ? user.role : user?.role?.name || 'Administrator'

  return (
    <aside className="sidebar bg-gray-100 p-4 w-64 space-y-4">
      {/* Profile Section */}
      <div className="flex flex-col items-center space-y-2">
        <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
          {/* Placeholder avatar */}
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
          <option value="Admisi">Admisi</option>
          <option value="Dokter">Dokter</option>
        </select>
      </div>

      {/* Menu */}
      <nav>
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const active = location.pathname.startsWith(item.path)
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-2 p-2 rounded hover:bg-gray-200 ${active ? 'bg-blue-100' : ''}`}
                >
                  <i className={`${item.icon} w-4`} />
                  <span>{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar

