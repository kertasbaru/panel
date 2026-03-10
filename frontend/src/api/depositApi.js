import api from './axiosInstance';

export const getDeposits = (params) => api.get('/deposits', { params });
export const getDeposit = (id) => api.get(`/deposits/${id}`);
export const createDeposit = (data) => api.post('/deposits', data);
export const confirmDeposit = (id) => api.put(`/deposits/${id}/confirm`);
export const cancelDeposit = (id) => api.put(`/deposits/${id}/cancel`);
