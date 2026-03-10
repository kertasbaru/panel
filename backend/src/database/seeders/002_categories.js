'use strict';

module.exports = {
  async up(queryInterface) {
    const now = new Date();
    await queryInterface.bulkInsert('categories', [
      { name: 'Pulsa', slug: 'pulsa', icon: 'phone', description: 'Pembelian pulsa semua operator', is_active: true, sort_order: 1, created_at: now, updated_at: now },
      { name: 'Paket Data', slug: 'paket-data', icon: 'wifi', description: 'Paket data internet semua operator', is_active: true, sort_order: 2, created_at: now, updated_at: now },
      { name: 'Token Listrik', slug: 'token-listrik', icon: 'zap', description: 'Token listrik PLN prabayar', is_active: true, sort_order: 3, created_at: now, updated_at: now },
      { name: 'Tagihan PLN', slug: 'tagihan-pln', icon: 'file-text', description: 'Pembayaran tagihan listrik PLN pascabayar', is_active: true, sort_order: 4, created_at: now, updated_at: now },
      { name: 'PDAM', slug: 'pdam', icon: 'droplet', description: 'Pembayaran tagihan air PDAM', is_active: true, sort_order: 5, created_at: now, updated_at: now },
      { name: 'BPJS', slug: 'bpjs', icon: 'shield', description: 'Pembayaran iuran BPJS Kesehatan', is_active: true, sort_order: 6, created_at: now, updated_at: now },
      { name: 'Internet & TV', slug: 'internet-tv', icon: 'monitor', description: 'Pembayaran tagihan internet dan TV kabel', is_active: true, sort_order: 7, created_at: now, updated_at: now },
      { name: 'E-Wallet', slug: 'e-wallet', icon: 'credit-card', description: 'Top up saldo e-wallet', is_active: true, sort_order: 8, created_at: now, updated_at: now },
      { name: 'Voucher Game', slug: 'voucher-game', icon: 'gamepad', description: 'Pembelian voucher game online', is_active: true, sort_order: 9, created_at: now, updated_at: now },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('categories', null, {});
  },
};
