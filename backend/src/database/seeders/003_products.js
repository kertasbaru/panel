'use strict';

module.exports = {
  async up(queryInterface) {
    const now = new Date();

    await queryInterface.bulkInsert('products', [
      // Pulsa Telkomsel (category_id = 1)
      { category_id: 1, provider_code: 'TSEL5', name: 'Telkomsel Pulsa 5.000', brand: 'Telkomsel', type: 'prepaid', base_price: 5500, sell_price: 6000, agent_price: 5750, admin_fee: 0, commission: 250, is_active: true, created_at: now, updated_at: now },
      { category_id: 1, provider_code: 'TSEL10', name: 'Telkomsel Pulsa 10.000', brand: 'Telkomsel', type: 'prepaid', base_price: 10500, sell_price: 11500, agent_price: 11000, admin_fee: 0, commission: 500, is_active: true, created_at: now, updated_at: now },
      { category_id: 1, provider_code: 'TSEL25', name: 'Telkomsel Pulsa 25.000', brand: 'Telkomsel', type: 'prepaid', base_price: 25200, sell_price: 26500, agent_price: 25800, admin_fee: 0, commission: 600, is_active: true, created_at: now, updated_at: now },
      { category_id: 1, provider_code: 'TSEL50', name: 'Telkomsel Pulsa 50.000', brand: 'Telkomsel', type: 'prepaid', base_price: 49800, sell_price: 51500, agent_price: 50500, admin_fee: 0, commission: 700, is_active: true, created_at: now, updated_at: now },
      { category_id: 1, provider_code: 'TSEL100', name: 'Telkomsel Pulsa 100.000', brand: 'Telkomsel', type: 'prepaid', base_price: 98500, sell_price: 101000, agent_price: 99500, admin_fee: 0, commission: 1000, is_active: true, created_at: now, updated_at: now },

      // Pulsa Indosat (category_id = 1)
      { category_id: 1, provider_code: 'ISAT5', name: 'Indosat Pulsa 5.000', brand: 'Indosat', type: 'prepaid', base_price: 5400, sell_price: 5900, agent_price: 5650, admin_fee: 0, commission: 250, is_active: true, created_at: now, updated_at: now },
      { category_id: 1, provider_code: 'ISAT10', name: 'Indosat Pulsa 10.000', brand: 'Indosat', type: 'prepaid', base_price: 10400, sell_price: 11300, agent_price: 10800, admin_fee: 0, commission: 400, is_active: true, created_at: now, updated_at: now },
      { category_id: 1, provider_code: 'ISAT25', name: 'Indosat Pulsa 25.000', brand: 'Indosat', type: 'prepaid', base_price: 25000, sell_price: 26200, agent_price: 25500, admin_fee: 0, commission: 500, is_active: true, created_at: now, updated_at: now },

      // Pulsa XL (category_id = 1)
      { category_id: 1, provider_code: 'XL5', name: 'XL Pulsa 5.000', brand: 'XL', type: 'prepaid', base_price: 5450, sell_price: 5950, agent_price: 5700, admin_fee: 0, commission: 250, is_active: true, created_at: now, updated_at: now },
      { category_id: 1, provider_code: 'XL10', name: 'XL Pulsa 10.000', brand: 'XL', type: 'prepaid', base_price: 10450, sell_price: 11400, agent_price: 10900, admin_fee: 0, commission: 450, is_active: true, created_at: now, updated_at: now },

      // Paket Data (category_id = 2)
      { category_id: 2, provider_code: 'TSELDATA1', name: 'Telkomsel Data 1GB / 30 Hari', brand: 'Telkomsel', type: 'prepaid', base_price: 18000, sell_price: 20000, agent_price: 19000, admin_fee: 0, commission: 1000, is_active: true, created_at: now, updated_at: now },
      { category_id: 2, provider_code: 'TSELDATA5', name: 'Telkomsel Data 5GB / 30 Hari', brand: 'Telkomsel', type: 'prepaid', base_price: 45000, sell_price: 50000, agent_price: 47000, admin_fee: 0, commission: 2000, is_active: true, created_at: now, updated_at: now },
      { category_id: 2, provider_code: 'ISATDATA1', name: 'Indosat Data 1GB / 30 Hari', brand: 'Indosat', type: 'prepaid', base_price: 15000, sell_price: 17000, agent_price: 16000, admin_fee: 0, commission: 1000, is_active: true, created_at: now, updated_at: now },

      // Token Listrik (category_id = 3)
      { category_id: 3, provider_code: 'PLN20', name: 'Token Listrik 20.000', brand: 'PLN', type: 'prepaid', base_price: 20000, sell_price: 22500, agent_price: 21000, admin_fee: 2000, commission: 500, is_active: true, created_at: now, updated_at: now },
      { category_id: 3, provider_code: 'PLN50', name: 'Token Listrik 50.000', brand: 'PLN', type: 'prepaid', base_price: 50000, sell_price: 52500, agent_price: 51000, admin_fee: 2000, commission: 500, is_active: true, created_at: now, updated_at: now },
      { category_id: 3, provider_code: 'PLN100', name: 'Token Listrik 100.000', brand: 'PLN', type: 'prepaid', base_price: 100000, sell_price: 102500, agent_price: 101000, admin_fee: 2000, commission: 500, is_active: true, created_at: now, updated_at: now },

      // Tagihan PLN (category_id = 4)
      { category_id: 4, provider_code: 'PLNPOST', name: 'Tagihan Listrik PLN', brand: 'PLN', type: 'postpaid', base_price: 0, sell_price: 0, agent_price: 0, admin_fee: 2500, commission: 500, is_active: true, created_at: now, updated_at: now },

      // PDAM (category_id = 5)
      { category_id: 5, provider_code: 'PDAMJKT', name: 'PDAM Jakarta', brand: 'PDAM', type: 'postpaid', base_price: 0, sell_price: 0, agent_price: 0, admin_fee: 2500, commission: 500, is_active: true, created_at: now, updated_at: now },

      // BPJS (category_id = 6)
      { category_id: 6, provider_code: 'BPJSKES', name: 'BPJS Kesehatan', brand: 'BPJS', type: 'postpaid', base_price: 0, sell_price: 0, agent_price: 0, admin_fee: 2500, commission: 500, is_active: true, created_at: now, updated_at: now },

      // E-Wallet (category_id = 8)
      { category_id: 8, provider_code: 'OVO25', name: 'OVO 25.000', brand: 'OVO', type: 'prepaid', base_price: 25000, sell_price: 26500, agent_price: 25800, admin_fee: 0, commission: 500, is_active: true, created_at: now, updated_at: now },
      { category_id: 8, provider_code: 'GOPAY25', name: 'GoPay 25.000', brand: 'GoPay', type: 'prepaid', base_price: 25000, sell_price: 26500, agent_price: 25800, admin_fee: 0, commission: 500, is_active: true, created_at: now, updated_at: now },
      { category_id: 8, provider_code: 'DANA25', name: 'DANA 25.000', brand: 'DANA', type: 'prepaid', base_price: 25000, sell_price: 26500, agent_price: 25800, admin_fee: 0, commission: 500, is_active: true, created_at: now, updated_at: now },

      // Voucher Game (category_id = 9)
      { category_id: 9, provider_code: 'ML86', name: 'Mobile Legends 86 Diamonds', brand: 'Mobile Legends', type: 'prepaid', base_price: 18000, sell_price: 20000, agent_price: 19000, admin_fee: 0, commission: 500, is_active: true, created_at: now, updated_at: now },
      { category_id: 9, provider_code: 'FF100', name: 'Free Fire 100 Diamonds', brand: 'Free Fire', type: 'prepaid', base_price: 15000, sell_price: 17000, agent_price: 16000, admin_fee: 0, commission: 500, is_active: true, created_at: now, updated_at: now },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('products', null, {});
  },
};
