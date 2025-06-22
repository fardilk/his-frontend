import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../auth/AuthContext'
import ProfileCard from './ProfileCard'

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
      <div>
        <ProfileCard
          name={user?.name || 'John Doe'}
          role={role}
          imageUrl="/doctor.png"
          onRoleSelect={setRole}
        />
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
