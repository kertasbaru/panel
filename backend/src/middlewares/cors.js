const cors = require('cors');
require('dotenv').config();

const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400,
};

const corsMiddleware = cors(corsOptions);

module.exports = { corsMiddleware, corsOptions };
