const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  provider_code: {
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
  },
  type: {
    type: DataTypes.ENUM('prepaid', 'postpaid'),
  },
  base_price: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: false,
  },
  sell_price: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: false,
  },
  agent_price: {
    type: DataTypes.DECIMAL(15, 2),
  },
  admin_fee: {
    type: DataTypes.DECIMAL(15, 2),
    defaultValue: 0,
  },
  commission: {
    type: DataTypes.DECIMAL(15, 2),
    defaultValue: 0,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  description: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'products',
  underscored: true,
  timestamps: true,
});

module.exports = Product;
