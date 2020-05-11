"use strict";
module.exports = (sequelize, DataTypes) => {
  const characters = sequelize.define(
    "characters",
    {
      userId: DataTypes.INTEGER,
      weapon: DataTypes.INTEGER,
      level: DataTypes.INTEGER,
      characterName: DataTypes.STRING,
      hp: DataTypes.INTEGER,
      attack: DataTypes.INTEGER,
      defense: DataTypes.INTEGER,
      exp: DataTypes.INTEGER,
      rankScore: DataTypes.INTEGER,
      gold: DataTypes.INTEGER,
      mp: DataTypes.INTEGER,
      loginTime: DataTypes.DATE,
      logoutTime: DataTypes.DATE,
      maxHp: DataTypes.INTEGER,
    },
    {}
  );
  characters.associate = function (models) {
    characters.belongsTo(models.users, { foreignKey: "userId" });
  };
  return characters;
};
