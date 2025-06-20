import React from 'react'

export interface ProfileHeaderProps {
  name: string
  role: string
  iconText: string
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, role, iconText }) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white font-bold mr-3">
        {iconText}
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-sm leading-tight">{name}</span>
        <span className="text-xs text-gray-500">{role}</span>
      </div>
    </div>
  )
}

export default ProfileHeader
