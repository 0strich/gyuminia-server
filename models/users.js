"use strict";
const crypto = require("crypto");
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
          var shasum = crypto.createHmac("sha512", "thisismysecretkey");
          shasum.update(data.password);
          data.password = shasum.digest("hex");
        },
        beforeFind: (data, option) => {
          if (data.where.password) {
            var shasum = crypto.createHmac("sha512", "thisismysecretkey");
            shasum.update(data.where.password);
            data.where.password = shasum.digest("hex");
          }
        },
      },
    }
  );
  users.associate = function (models) {
    users.hasMany(models.characters, { foreignKey: "userId" });
  };
  return users;
};
