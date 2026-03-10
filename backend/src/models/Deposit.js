const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Deposit = sequelize.define('Deposit', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  deposit_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  amount: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: false,
  },
  fee: {
    type: DataTypes.DECIMAL(15, 2),
    defaultValue: 0,
  },
  total: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: false,
  },
  payment_method: {
    type: DataTypes.STRING,
  },
  payment_channel: {
    type: DataTypes.STRING,
  },
  payment_ref: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.ENUM('pending', 'paid', 'confirmed', 'expired', 'cancelled'),
    defaultValue: 'pending',
  },
  expired_at: {
    type: DataTypes.DATE,
  },
  confirmed_at: {
    type: DataTypes.DATE,
  },
  confirmed_by: {
    type: DataTypes.INTEGER,
  },
  note: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'deposits',
  underscored: true,
  timestamps: true,
});

module.exports = Deposit;
