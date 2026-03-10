'use strict';

module.exports = {
  async up(queryInterface) {
    const now = new Date();
    await queryInterface.bulkInsert('settings', [
      { key: 'app_name', value: 'PPOB Platform', description: 'Application name', updated_at: now },
      { key: 'app_description', value: 'Platform Payment Point Online Bank untuk pembelian pulsa, paket data, token listrik, dan pembayaran tagihan.', description: 'Application description', updated_at: now },
      { key: 'markup_percentage', value: '5', description: 'Default markup percentage for product pricing', updated_at: now },
      { key: 'admin_fee_default', value: '0', description: 'Default admin fee applied to transactions', updated_at: now },
      { key: 'minimum_deposit', value: '10000', description: 'Minimum deposit amount allowed', updated_at: now },
      { key: 'max_transaction_per_day', value: '100', description: 'Maximum number of transactions per user per day', updated_at: now },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('settings', null, {});
  },
};
