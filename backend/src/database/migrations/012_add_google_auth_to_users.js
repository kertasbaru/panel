'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('users', 'phone', {
      type: Sequelize.STRING(20),
      allowNull: true,
      unique: true,
    });
    await queryInterface.changeColumn('users', 'password', {
      type: Sequelize.STRING(255),
      allowNull: true,
    });
    await queryInterface.addColumn('users', 'google_id', {
      type: Sequelize.STRING(255),
      allowNull: true,
      unique: true,
      after: 'avatar',
    });
    await queryInterface.addColumn('users', 'auth_provider', {
      type: Sequelize.ENUM('local', 'google'),
      defaultValue: 'local',
      after: 'google_id',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'google_id');
    await queryInterface.removeColumn('users', 'auth_provider');
    await queryInterface.changeColumn('users', 'phone', {
      type: Sequelize.STRING(20),
      allowNull: false,
      unique: true,
    });
    await queryInterface.changeColumn('users', 'password', {
      type: Sequelize.STRING(255),
      allowNull: false,
    });
  },
};
