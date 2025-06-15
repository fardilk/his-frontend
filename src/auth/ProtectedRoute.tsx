import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

// Protected route that checks token and role from localStorage
const ProtectedRoute: React.FC = () => {
  const token = localStorage.getItem('his_token')
  const role = localStorage.getItem('his_role')

  // simple validation: must have token and valid role
  if (!token || role !== 'administrator') {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default ProtectedRoute
