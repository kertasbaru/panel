'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'categories',
          key: 'id',
        },
        onDelete: 'SET NULL',
      },
      provider_code: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      name: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      brand: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      type: {
        type: Sequelize.ENUM('prepaid', 'postpaid'),
        allowNull: true,
      },
      base_price: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: true,
      },
      sell_price: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: true,
      },
      agent_price: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: true,
      },
      admin_fee: {
        type: Sequelize.DECIMAL(15, 2),
        defaultValue: 0,
      },
      commission: {
        type: Sequelize.DECIMAL(15, 2),
        defaultValue: 0,
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      description: {
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
    await queryInterface.dropTable('products');
  },
};
