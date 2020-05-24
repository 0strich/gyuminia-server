'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('characters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      weapon: {
        type: Sequelize.INTEGER
      },
      level: {
        type: Sequelize.INTEGER
      },
      characterName: {
        type: Sequelize.STRING
      },
      hp: {
        type: Sequelize.INTEGER
      },
      attack: {
        type: Sequelize.INTEGER
      },
      defense: {
        type: Sequelize.INTEGER
      },
      exp: {
        type: Sequelize.INTEGER
      },
      rankScore: {
        type: Sequelize.INTEGER
      },
      gold: {
        type: Sequelize.INTEGER
      },
      mp: {
        type: Sequelize.INTEGER
      },
      loginTime: {
        type: Sequelize.DATE
      },
      logoutTime: {
        type: Sequelize.DATE
      },
      maxHp: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('characters');
  }
};