'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('deposits', {
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
      deposit_id: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true,
      },
      amount: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: false,
      },
      fee: {
        type: Sequelize.DECIMAL(15, 2),
        defaultValue: 0,
      },
      total: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: false,
      },
      payment_method: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      payment_channel: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      payment_ref: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      status: {
        type: Sequelize.ENUM('pending', 'paid', 'confirmed', 'expired', 'cancelled'),
        defaultValue: 'pending',
      },
      expired_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      confirmed_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      confirmed_by: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('deposits');
  },
};
