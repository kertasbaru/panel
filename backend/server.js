require('dotenv').config();
const createApp = require('./src/config/app');
const { sequelize } = require('./src/models');

const PORT = process.env.PORT || 3000;

const app = createApp();

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully');

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    });
  } catch (error) {
    console.error('Unable to start server:', error);
    process.exit(1);
  }
};

start();
