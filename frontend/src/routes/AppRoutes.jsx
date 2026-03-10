import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import AuthLayout from '../components/layout/AuthLayout';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';

// Auth pages
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage';
import VerifyOTPPage from '../pages/auth/VerifyOTPPage';

// Main pages
import DashboardPage from '../pages/dashboard/DashboardPage';
import TransactionHistoryPage from '../pages/transaction/TransactionHistoryPage';
import PulsaPage from '../pages/transaction/PulsaPage';
import DepositPage from '../pages/deposit/DepositPage';
import DepositHistoryPage from '../pages/deposit/DepositHistoryPage';
import ProfilePage from '../pages/user/ProfilePage';
import UserManagementPage from '../pages/user/UserManagementPage';
import SettingPage from '../pages/setting/SettingPage';
import SalesReportPage from '../pages/report/SalesReportPage';
import CommissionReportPage from '../pages/report/CommissionReportPage';
import NotFoundPage from '../pages/NotFoundPage';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Auth routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/verify-otp" element={<VerifyOTPPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Route>

      {/* Protected routes */}
      <Route element={<PrivateRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/transaksi/pulsa" element={<PulsaPage />} />
          <Route path="/transaksi/riwayat" element={<TransactionHistoryPage />} />
          <Route path="/deposit" element={<DepositPage />} />
          <Route path="/deposit/riwayat" element={<DepositHistoryPage />} />
          <Route path="/profil" element={<ProfilePage />} />

          {/* Admin routes */}
          <Route element={<AdminRoute />}>
            <Route path="/admin/users" element={<UserManagementPage />} />
            <Route path="/admin/pengaturan" element={<SettingPage />} />
            <Route path="/admin/laporan/penjualan" element={<SalesReportPage />} />
            <Route path="/admin/laporan/komisi" element={<CommissionReportPage />} />
          </Route>
        </Route>
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
