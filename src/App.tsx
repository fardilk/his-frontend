import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import Schedule from './pages/Schedule';
import Workforce from './pages/Workforce';
import ProtectedRoute from './auth/ProtectedRoute';
import MainLayout from './layout/MainLayout';
import AdmissionLayout from './pages/admission/AdmissionLayout';
import DaftarPasien from './pages/admission/DaftarPasien';
import FormPasienBaru from './pages/admission/FormPasienBaru';
import SaasSidebarPreview from './pages/SaasSidebarPreview';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sidebar-preview" element={<SaasSidebarPreview />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="workforce" element={<Workforce />} />
          <Route path="admission" element={<AdmissionLayout />}>
            <Route index element={<Navigate to="daftar-pasien" replace />} />
            <Route path="daftar-pasien" element={<DaftarPasien />} />
            <Route path="form-pasien-baru" element={<FormPasienBaru />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
