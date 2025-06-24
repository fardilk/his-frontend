import { useRef, useState, useEffect } from 'react'
import { useAuth } from '../auth/AuthContext'
import './Navbar.css'

interface CollapseSidebarProps {
  onCollapse: () => void
}

const CollapseSidebar: React.FC<CollapseSidebarProps> = ({ onCollapse }) => (
  <button type="button" className="collapse-btn" onClick={onCollapse}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="collapse-icon"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5" />
    </svg>
  </button>
)

interface ProfilePictureCardProps {
  name: string
  currentRole: string
  imageUrl: string
}

const dummyRoles = ['Administrator', 'Doctor', 'Nurse']

const ProfilePictureCard: React.FC<ProfilePictureCardProps> = ({ name, currentRole, imageUrl }) => {
  const [open, setOpen] = useState(false)
  const [role, setRole] = useState(currentRole)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const handleSelect = (r: string) => {
    setRole(r)
    setOpen(false)
  }

  return (
    <div className="profile-wrapper" ref={wrapperRef}>
      <img src={imageUrl} alt="Profile" className="profile-img" />
      <div className="profile-info">
        <span className="profile-name">{name}</span>
        <span className="profile-role">{role}</span>
      </div>
      <div className="profile-dropdown-wrapper">
        <button type="button" className="profile-toggle-btn" onClick={() => setOpen(o => !o)}>
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="profile-toggle-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.23 12.21a.75.75 0 011.06.02L10 15.584l3.71-3.354a.75.75 0 111.02 1.096l-4.22 3.807a.75.75 0 01-1.02 0l-4.22-3.807a.75.75 0 01.02-1.096z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="profile-toggle-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M14.77 7.79a.75.75 0 00-1.06-.02L10 11.584 6.29 7.77a.75.75 0 10-1.02 1.096l4.22 3.807a.75.75 0 001.02 0l4.22-3.807a.75.75 0 00-.02-1.096z" clipRule="evenodd" />
            </svg>
          )}
        </button>
        {open && (
          <ul className="profile-dropdown">
            {dummyRoles.map(r => (
              <li key={r}>
                <button type="button" className="profile-role-item" onClick={() => handleSelect(r)}>
                  {r}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

interface NavbarProps {
  onCollapse: () => void
}

const Navbar: React.FC<NavbarProps> = ({ onCollapse }) => {
  const { user } = useAuth()
  const name = user?.name || 'John Doe'
  const role = typeof user?.role === 'string' ? user.role : user?.role?.name || 'Administrator'
  const [showNotificationPopup, setShowNotificationPopup] = useState(false)

  const handleNotificationClick = () => {
    setShowNotificationPopup(true)
    setTimeout(() => setShowNotificationPopup(false), 2000)
  }

  return (
    <nav className="navbar">
      <CollapseSidebar onCollapse={onCollapse} />
      <div className="navbar-center">
        <div></div>
      </div>
      <div className="navbar-actions">
        <button type="button" className="notification-btn" onClick={handleNotificationClick}>
          <svg xmlns="http://www.w3.org/2000/svg" className="notification-icon" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 2a6 6 0 016 6v3.586l.707.707a1 1 0 01-.707 1.707H4a1 1 0 01-.707-1.707L4 11.586V8a6 6 0 016-6z" />
            <path d="M5 15a5 5 0 0010 0H5z" />
          </svg>
          {showNotificationPopup && (
            <div className="notification-popup">No notification found</div>
          )}
        </button>
        <ProfilePictureCard name={name} currentRole={role} imageUrl="/doctor.png" />
      </div>
    </nav>
  )
}

export default Navbar

