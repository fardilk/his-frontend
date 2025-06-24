import React from 'react'

export interface ProfilePictureProps {
  name: string
  role: string
  imageSrc: string
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ name, role, imageSrc }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300 shadow">
      <img src={imageSrc} alt="Profile" className="w-full h-full object-cover" />
    </div>
    <div className="text-center leading-none">
      <p className="font-semibold text-gray-800 text-sm">{name}</p>
      <p className="text-xs text-gray-500">{role}</p>
    </div>
  </div>
)

export default ProfilePicture
