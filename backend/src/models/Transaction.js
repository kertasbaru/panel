const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Transaction = sequelize.define('Transaction', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  trx_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  target: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: false,
  },
  admin_fee: {
    type: DataTypes.DECIMAL(15, 2),
    defaultValue: 0,
  },
  total: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: false,
  },
  commission: {
    type: DataTypes.DECIMAL(15, 2),
    defaultValue: 0,
  },
  status: {
    type: DataTypes.ENUM('pending', 'processing', 'success', 'failed', 'refunded'),
    defaultValue: 'pending',
  },
  provider_ref: {
    type: DataTypes.STRING,
  },
  provider_status: {
    type: DataTypes.STRING,
  },
  serial_number: {
    type: DataTypes.STRING,
  },
  response_data: {
    type: DataTypes.JSON,
  },
  note: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'transactions',
  underscored: true,
  timestamps: true,
});

module.exports = Transaction;
