const CryptoJS = require('crypto-js');
require('dotenv').config();

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || 'default_encryption_key_32chars!!';

const encrypt = (text) => {
  return CryptoJS.AES.encrypt(text, ENCRYPTION_KEY).toString();
};

const decrypt = (ciphertext) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, ENCRYPTION_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};

module.exports = { encrypt, decrypt };
