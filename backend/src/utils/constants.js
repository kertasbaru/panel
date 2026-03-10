module.exports = {
  ROLES: {
    ADMIN: 'admin',
    AGEN: 'agen',
    MEMBER: 'member',
  },

  USER_STATUS: {
    ACTIVE: 'active',
    INACTIVE: 'inactive',
    SUSPENDED: 'suspended',
  },

  TRANSACTION_STATUS: {
    PENDING: 'pending',
    PROCESSING: 'processing',
    SUCCESS: 'success',
    FAILED: 'failed',
    REFUNDED: 'refunded',
  },

  DEPOSIT_STATUS: {
    PENDING: 'pending',
    PAID: 'paid',
    CONFIRMED: 'confirmed',
    EXPIRED: 'expired',
    CANCELLED: 'cancelled',
  },

  PRODUCT_TYPE: {
    PREPAID: 'prepaid',
    POSTPAID: 'postpaid',
  },

  MUTATION_TYPE: {
    CREDIT: 'credit',
    DEBIT: 'debit',
  },

  COMMISSION_STATUS: {
    PENDING: 'pending',
    PAID: 'paid',
  },

  NOTIFICATION_TYPE: {
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
  },

  CACHE_TTL: {
    PRODUCTS: 3600,       // 1 hour
    PRICE: 1800,          // 30 minutes
    DASHBOARD: 300,       // 5 minutes
    SESSION: 86400,       // 24 hours
    OTP: 300,             // 5 minutes
    RATE_LIMIT: 60,       // 1 minute
    LOCK: 30,             // 30 seconds
  },
};
