const dbConfig = require('../config/db.js');
const Sequelize = require('sequelize');


    const  sequelize = new Sequelize(
        dbConfig.DB,
        dbConfig.USER,
        dbConfig.PASSWORD,
        {
            host: dbConfig.HOST,
            dialect: 'postgres',
            pool: {
                max: dbConfig.pool.max,
                min: dbConfig.pool.min,
                acquire: dbConfig.pool.acquire,
                idle: dbConfig.pool.idle
            }
        }
    );

        // sequelize.authenticate().then(() => {
        //    console.log('Connection has been established successfully.');
        // }).catch((error) => {
        //    console.error('Unable to connect to the database: ', error.message);
        // });     
     

const User = require('./user.js');
const Business = require('./business.js')(sequelize, Sequelize)
const Product = require('./product.js');
      
      
      // --------------------------------------Relationships----------------------------------------------
    //   User.belongsToMany(Business, {through: 'business_owner'});
    //   Business.belongsToMany(User, {through: 'business_owner'});
    //   Business.hasMany(Product, {foreignKey: 'business_id'});

module.exports = {
    Sequelize, 
    sequelize, 
    User,
    Business,
    Product
};
