import api from './axiosInstance';

export const login = (data) => api.post('/auth/login', data);
export const register = (data) => api.post('/auth/register', data);
export const verifyOTP = (data) => api.post('/auth/verify-otp', data);
export const resendOTP = (data) => api.post('/auth/resend-otp', data);
export const logout = () => api.post('/auth/logout');
export const refreshToken = (data) => api.post('/auth/refresh-token', data);
export const forgotPassword = (data) => api.post('/auth/forgot-password', data);
export const resetPassword = (data) => api.post('/auth/reset-password', data);
export const getMe = () => api.get('/auth/me');
