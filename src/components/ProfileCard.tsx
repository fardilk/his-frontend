import React, { useEffect, useRef, useState } from 'react'
import './ProfileCard.css'

export interface ProfileCardProps {
  name: string
  role: string
  imageUrl: string
  onRoleSelect?: (role: string) => void
}

const dummyRoles = ['Administrator', 'Doctor', 'Nurse']

const ProfileCard: React.FC<ProfileCardProps> = ({ name, role, imageUrl, onRoleSelect }) => {
  const [open, setOpen] = useState(false)
  const [currentRole, setCurrentRole] = useState(role)
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
    console.log(r)
    setCurrentRole(r)
    onRoleSelect && onRoleSelect(r)
    setOpen(false)
  }

  return (
    <div className="profile-card" ref={wrapperRef}>
      <img src={imageUrl} alt="Profile" className="profile-image" />
      <div className="flex flex-col flex-1 mx-3">
        <span className="profile-name">{name}</span>
        <span className="profile-role">{currentRole}</span>
      </div>
      <div className="relative">
        <button
          type="button"
          className="toggle-btn"
          onClick={() => setOpen(o => !o)}
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M5.23 12.21a.75.75 0 011.06.02L10 15.584l3.71-3.354a.75.75 0 111.02 1.096l-4.22 3.807a.75.75 0 01-1.02 0l-4.22-3.807a.75.75 0 01.02-1.096z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M14.77 7.79a.75.75 0 00-1.06-.02L10 11.584 6.29 7.77a.75.75 0 10-1.02 1.096l4.22 3.807a.75.75 0 001.02 0l4.22-3.807a.75.75 0 00-.02-1.096z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
        {open && (
          <ul className="role-popup">
            {dummyRoles.map(r => (
              <li key={r}>
                <button
                  type="button"
                  className="role-item"
                  onClick={() => handleSelect(r)}
                >
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

export default ProfileCard
