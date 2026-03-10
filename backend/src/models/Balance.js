const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Balance = sequelize.define('Balance', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(15, 2),
    defaultValue: 0,
  },
}, {
  tableName: 'balances',
  underscored: true,
  timestamps: true,
});

module.exports = Balance;
