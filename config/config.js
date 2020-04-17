require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_HOST,
    password: process.env.DB_PASS,
    database: "database_development",
    host: process.env.DB_USER,
    dialect: "mysql",
    operatorsAliases: false,
  },
  test: {
    username: process.env.DB_HOST,
    password: process.env.DB_PASS,
    database: "database_test",
    host: process.env.DB_USER,
    dialect: "mysql",
    operatorsAliases: false,
  },
  production: {
    username: process.env.DB_HOST,
    password: process.env.DB_PASS,
    database: "database_production",
    host: process.env.DB_USER,
    dialect: "mysql",
    operatorsAliases: false,
  },
};
