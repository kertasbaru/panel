export const APP_NAME = import.meta.env.VITE_APP_NAME || 'PPOB Platform';

export const ROLES = {
  ADMIN: 'admin',
  AGEN: 'agen',
  MEMBER: 'member',
};

export const TRANSACTION_STATUS = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  SUCCESS: 'success',
  FAILED: 'failed',
  REFUNDED: 'refunded',
};

export const TRANSACTION_STATUS_LABEL = {
  pending: 'Menunggu',
  processing: 'Diproses',
  success: 'Berhasil',
  failed: 'Gagal',
  refunded: 'Dikembalikan',
};

export const DEPOSIT_STATUS_LABEL = {
  pending: 'Menunggu',
  paid: 'Dibayar',
  confirmed: 'Dikonfirmasi',
  expired: 'Kedaluwarsa',
  cancelled: 'Dibatalkan',
};
