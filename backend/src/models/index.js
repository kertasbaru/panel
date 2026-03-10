const sequelize = require('../config/database');
const User = require('./User');
const Category = require('./Category');
const Product = require('./Product');
const Balance = require('./Balance');
const BalanceMutation = require('./BalanceMutation');
const Transaction = require('./Transaction');
const Deposit = require('./Deposit');
const Commission = require('./Commission');
const Notification = require('./Notification');
const Setting = require('./Setting');
const AuditLog = require('./AuditLog');

// User associations
User.hasOne(Balance, { foreignKey: 'user_id' });
User.hasMany(Transaction, { foreignKey: 'user_id' });
User.hasMany(Deposit, { foreignKey: 'user_id' });
User.hasMany(BalanceMutation, { foreignKey: 'user_id' });
User.hasMany(Commission, { foreignKey: 'user_id' });
User.hasMany(Notification, { foreignKey: 'user_id' });
User.hasMany(AuditLog, { foreignKey: 'user_id' });

// Category associations
Category.hasMany(Product, { foreignKey: 'category_id' });
Product.belongsTo(Category, { foreignKey: 'category_id' });

// Product associations
Product.hasMany(Transaction, { foreignKey: 'product_id' });

// Transaction associations
Transaction.belongsTo(User, { foreignKey: 'user_id' });
Transaction.belongsTo(Product, { foreignKey: 'product_id' });
Transaction.hasOne(Commission, { foreignKey: 'transaction_id' });

// Balance associations
Balance.belongsTo(User, { foreignKey: 'user_id' });

// BalanceMutation associations
BalanceMutation.belongsTo(User, { foreignKey: 'user_id' });

// Deposit associations
Deposit.belongsTo(User, { foreignKey: 'user_id' });

// Commission associations
Commission.belongsTo(User, { foreignKey: 'user_id' });
Commission.belongsTo(Transaction, { foreignKey: 'transaction_id' });

// Notification associations
Notification.belongsTo(User, { foreignKey: 'user_id' });

// AuditLog associations
AuditLog.belongsTo(User, { foreignKey: 'user_id' });

module.exports = {
  sequelize,
  User,
  Category,
  Product,
  Balance,
  BalanceMutation,
  Transaction,
  Deposit,
  Commission,
  Notification,
  Setting,
  AuditLog,
};
