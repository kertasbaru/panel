'use strict';

const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface) {
    const hashedPassword = await bcrypt.hash('admin123', 12);
    await queryInterface.bulkInsert('users', [{
      uuid: uuidv4(),
      name: 'Administrator',
      email: 'admin@ppob.com',
      phone: '081234567890',
      password: hashedPassword,
      role: 'admin',
      status: 'active',
      created_at: new Date(),
      updated_at: new Date(),
    }]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', { email: 'admin@ppob.com' });
  },
};
