"use strict";
const bcrpyt = require("bcrypt");
require("dotenv").config();

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      mobile: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: (data, option) => {
          // use bycrypt
          const hash = bcrpyt.hashSync(data.password, 8);
          data.password = hash;
        },
        beforeFind: (data, option) => {
          // use bycrypt
          if (data.where.password) {
            const hash = bcrpyt.hashSync(data.password, 8);
            data.where.password = hash;
          }
        },
      },
    }
  );
  users.associate = function (models) {
    // associations can be defined here
  };
  return users;
};
