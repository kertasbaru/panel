import { create } from 'zustand';
import { getUser, setUser as saveUser, clearAuth, setToken, setRefreshToken } from '../utils/storage';

export const useAuthStore = create((set) => ({
  user: getUser(),
  isAuthenticated: !!getUser(),

  login: (userData, token, refreshToken) => {
    saveUser(userData);
    setToken(token);
    setRefreshToken(refreshToken);
    set({ user: userData, isAuthenticated: true });
  },

  logout: () => {
    clearAuth();
    set({ user: null, isAuthenticated: false });
  },

  setUser: (userData) => {
    saveUser(userData);
    set({ user: userData });
  },
}));
