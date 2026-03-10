import api from './axiosInstance';

export const getSalesReport = (params) => api.get('/reports/sales', { params });
export const getCommissionReport = (params) => api.get('/reports/commissions', { params });
export const getReportSummary = (params) => api.get('/reports/summary', { params });
export const exportReport = (params) => api.get('/reports/export', { params, responseType: 'blob' });
