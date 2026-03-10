import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/authSlice';

const AdminRoute = () => {
  const user = useAuthStore((state) => state.user);

  if (!user || user.role !== 'admin') {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default AdminRoute;
