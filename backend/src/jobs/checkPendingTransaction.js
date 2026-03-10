const cron = require('node-cron');
const { Transaction } = require('../models');
const { Op } = require('sequelize');

const checkPendingTransactions = () => {
  // Run every 5 minutes
  cron.schedule('*/5 * * * *', async () => {
    try {
      const pendingTransactions = await Transaction.findAll({
        where: {
          status: 'pending',
          created_at: {
            [Op.lt]: new Date(Date.now() - 30 * 60 * 1000), // older than 30 minutes
          },
        },
      });

      for (const trx of pendingTransactions) {
        // TODO: Check transaction status with provider
        console.log(`Checking pending transaction: ${trx.trx_id}`);
      }
    } catch (error) {
      console.error('Error checking pending transactions:', error);
    }
  });
};

module.exports = checkPendingTransactions;
