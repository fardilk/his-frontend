import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute: React.FC = () => {
  const auth = useAuth();

  // Di sini kita asumsikan kalau ada login artinya user authorized
  // Anda bisa tambah check token, role, dsb jika perlu
  const isAuthenticated = !!auth;

  if (!isAuthenticated) {
    // Redirect ke login kalau belum auth
    return <Navigate to="/login" replace />;
  }

  // Kalau sudah auth, render child route
  return <Outlet />;
};

export default ProtectedRoute;