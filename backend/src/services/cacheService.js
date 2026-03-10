const redis = require('../config/redis');

const get = async (key) => {
  const data = await redis.get(key);
  return data ? JSON.parse(data) : null;
};

const set = async (key, data, ttl = 3600) => {
  await redis.set(key, JSON.stringify(data), 'EX', ttl);
};

const del = async (key) => {
  await redis.del(key);
};

const delPattern = async (pattern) => {
  const keys = await redis.keys(pattern);
  if (keys.length > 0) {
    await redis.del(...keys);
  }
};

const acquireLock = async (key, ttl = 30) => {
  const result = await redis.set(key, '1', 'EX', ttl, 'NX');
  return result === 'OK';
};

const releaseLock = async (key) => {
  await redis.del(key);
};

module.exports = { get, set, del, delPattern, acquireLock, releaseLock };
