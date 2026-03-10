const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Setting = sequelize.define('Setting', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  key: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  value: {
    type: DataTypes.TEXT,
  },
  description: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'settings',
  underscored: true,
  timestamps: true,
  createdAt: false,
});

module.exports = Setting;
