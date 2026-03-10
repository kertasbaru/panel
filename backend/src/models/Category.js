const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  icon: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  sort_order: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
}, {
  tableName: 'categories',
  underscored: true,
  timestamps: true,
});

module.exports = Category;
