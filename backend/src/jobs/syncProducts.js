const cron = require('node-cron');

const syncProducts = () => {
  // Run daily at 2 AM
  cron.schedule('0 2 * * *', async () => {
    try {
      // TODO: Sync products from PPOB provider
      console.log('Syncing products from provider...');
    } catch (error) {
      console.error('Error syncing products:', error);
    }
  });
};

module.exports = syncProducts;
