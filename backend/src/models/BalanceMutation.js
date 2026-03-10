const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const BalanceMutation = sequelize.define('BalanceMutation', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('credit', 'debit'),
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: false,
  },
  balance_before: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: false,
  },
  balance_after: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: false,
  },
  reference_type: {
    type: DataTypes.STRING,
  },
  reference_id: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'balance_mutations',
  underscored: true,
  timestamps: true,
  updatedAt: false,
});

module.exports = BalanceMutation;
