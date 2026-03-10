import api from './axiosInstance';

export const getTransactions = (params) => api.get('/transactions', { params });
export const getTransaction = (id) => api.get(`/transactions/${id}`);
export const createTransaction = (data) => api.post('/transactions', data);
export const inquiryTransaction = (data) => api.post('/transactions/inquiry', data);
export const callbackTransaction = (data) => api.post('/transactions/callback', data);
