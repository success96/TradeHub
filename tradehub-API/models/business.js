const { DataTypes} = require('sequelize');
const sequelize = require('../config/db');

module.exports = (sequelize, Sequelize) => {
  const Business = sequelize.define('business', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true
  },
  businessName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: DataTypes.STRING
  },
  physicalAddress: {
    type: DataTypes.STRING
  }
});
}
