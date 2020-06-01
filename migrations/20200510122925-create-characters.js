"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("characters", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      weapon: {
        type: Sequelize.INTEGER,
        defaulValue: null,
      },
      level: {
        type: Sequelize.INTEGER,
        defaulValue: 1,
      },
      characterName: {
        type: Sequelize.STRING,
      },
      hp: {
        type: Sequelize.INTEGER,
        defaulValue: 100,
      },
      attack: {
        type: Sequelize.INTEGER,
        defaulValue: 100,
      },
      defense: {
        type: Sequelize.INTEGER,
        defaulValue: 100,
      },
      exp: {
        type: Sequelize.INTEGER,
        defaulValue: 0,
      },
      rankScore: {
        type: Sequelize.INTEGER,
        defaulValue: 0,
      },
      gold: {
        type: Sequelize.INTEGER,
        defaulValue: 0,
      },
      mp: {
        type: Sequelize.INTEGER,
        defaulValue: 100,
      },
      loginTime: {
        type: Sequelize.DATE,
        defaulValue: null,
      },
      logoutTime: {
        type: Sequelize.DATE,
        defaulValue: null,
      },
      maxHp: {
        type: Sequelize.INTEGER,
        defaulValue: 100,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaulValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaulValue: Sequelize.NOW,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("characters");
  },
};
