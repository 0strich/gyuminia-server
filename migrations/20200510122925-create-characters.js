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
        defaultValue: null,
      },
      level: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      characterName: {
        type: Sequelize.STRING,
      },
      hp: {
        type: Sequelize.INTEGER,
        defaultValue: 100,
      },
      attack: {
        type: Sequelize.INTEGER,
        defaultValue: 100,
      },
      defense: {
        type: Sequelize.INTEGER,
        defaultValue: 100,
      },
      exp: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      rankScore: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      gold: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      mp: {
        type: Sequelize.INTEGER,
        defaultValue: 100,
      },
      loginTime: {
        type: Sequelize.DATE,
        defaultValue: null,
      },
      logoutTime: {
        type: Sequelize.DATE,
        defaultValue: null,
      },
      maxHp: {
        type: Sequelize.INTEGER,
        defaultValue: 100,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("characters");
  },
};
