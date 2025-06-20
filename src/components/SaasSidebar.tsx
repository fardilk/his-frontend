import { useState } from 'react'

const SaasSidebar: React.FC = () => {
  const [role, setRole] = useState('Administrator')

  return (
    <aside className="bg-white shadow-lg rounded-lg p-4 w-64 h-full flex flex-col space-y-4">
      {/* Profile */}
      <div className="flex flex-col items-center">
        <img
          src="/doctor.png"
          alt="Profile"
          className="w-24 h-24 rounded-full border-2 border-gray-200 mb-2 object-cover"
        />
        <p className="font-semibold text-gray-700">John Doe</p>
        <p className="text-sm text-gray-400">{role}</p>
      </div>

      {/* Role Dropdown */}
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-400 mb-4"
      >
        <option value="Administrator">Administrator</option>
        <option value="Admisi">Admisi</option>
        <option value="Dokter">Dokter</option>
      </select>

      {/* Menu */}
      <nav>
        <ul>
          <li className="p-2 rounded-md hover:bg-gray-100 cursor-pointer text-sm font-medium text-gray-700 transition-colors duration-200">
            Logout
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default SaasSidebar
