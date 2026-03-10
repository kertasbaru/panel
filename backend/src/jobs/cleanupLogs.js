const cron = require('node-cron');
const { AuditLog } = require('../models');
const { Op } = require('sequelize');

const cleanupLogs = () => {
  // Run weekly on Sunday at 3 AM
  cron.schedule('0 3 * * 0', async () => {
    try {
      const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
      const deleted = await AuditLog.destroy({
        where: {
          created_at: {
            [Op.lt]: thirtyDaysAgo,
          },
        },
      });
      console.log(`Cleaned up ${deleted} old audit logs`);
    } catch (error) {
      console.error('Error cleaning up logs:', error);
    }
  });
};

module.exports = cleanupLogs;
