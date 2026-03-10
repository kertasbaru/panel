import { useAuthStore } from '../store/authSlice';

const useAuth = () => {
  const { user, isAuthenticated, login, logout, setUser } = useAuthStore();
  return { user, isAuthenticated, login, logout, setUser };
};

export default useAuth;
