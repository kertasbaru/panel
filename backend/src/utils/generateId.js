const { v4: uuidv4 } = require('uuid');

const generateTrxId = (prefix = 'TRX') => {
  const now = new Date();
  const dateStr = now.toISOString().slice(0, 10).replace(/-/g, '');
  const random = Math.floor(Math.random() * 100000).toString().padStart(5, '0');
  return `${prefix}${dateStr}${random}`;
};

const generateUUID = () => {
  return uuidv4();
};

const generateDepositId = () => {
  return generateTrxId('DEP');
};

module.exports = { generateTrxId, generateUUID, generateDepositId };
