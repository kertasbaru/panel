import api from './axiosInstance';

export const getBalance = () => api.get('/balance');
export const getBalanceHistory = (params) => api.get('/balance/history', { params });
