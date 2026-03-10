'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'products',
          key: 'id',
        },
        onDelete: 'SET NULL',
      },
      trx_id: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true,
      },
      target: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      price: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: false,
      },
      admin_fee: {
        type: Sequelize.DECIMAL(15, 2),
        defaultValue: 0,
      },
      total: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: false,
      },
      commission: {
        type: Sequelize.DECIMAL(15, 2),
        defaultValue: 0,
      },
      status: {
        type: Sequelize.ENUM('pending', 'processing', 'success', 'failed', 'refunded'),
        defaultValue: 'pending',
      },
      provider_ref: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      provider_status: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      serial_number: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      response_data: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      note: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('transactions');
  },
};
