import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import ProtectedRoute from './auth/ProtectedRoute';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
