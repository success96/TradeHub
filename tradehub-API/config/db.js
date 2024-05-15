//const { Sequelize } = require('sequelize');

// const dotenv = require('dotenv');
// dotenv.config();

// const sequelize = new Sequelize(
//   process.env.MYSQL_DB,
//   process.env.MYSQL_USER,
//   process.env.MYSQL_PWD, {
//   host: process.env.MYSQL_HOST,
//   dialect: 'mysql',
//   operatorsAliases: false
// });

//module.exports = sequelize;

module.exports = {
  HOST: process.env.MYSQL_HOST,
  USER: process.env.MYSQL_USER,
  PASSWORD: process.env.MYSQL_PWD,
  DB: process.env.MYSQL_DB,
//  dialect: process.env.MYSQL_DIALECT,
  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
  }
};
