const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const AuditLog = sequelize.define('AuditLog', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  action: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  entity_type: {
    type: DataTypes.STRING,
  },
  entity_id: {
    type: DataTypes.INTEGER,
  },
  old_data: {
    type: DataTypes.JSON,
  },
  new_data: {
    type: DataTypes.JSON,
  },
  ip_address: {
    type: DataTypes.STRING,
  },
  user_agent: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'audit_logs',
  underscored: true,
  timestamps: true,
  updatedAt: false,
});

module.exports = AuditLog;
