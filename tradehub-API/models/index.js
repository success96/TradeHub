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
            },
            dialectOptions: { 
                decimalNumbers: true 
            },
            logging: console.log('Query executed successfully')
        }
    );
 
     

const user = require('./user.js')(sequelize, Sequelize);
const business = require('./business.js')(sequelize, Sequelize);
const product = require('./product.js')(sequelize, Sequelize);

      
// --------------------------------------Relationships----------------------------------------------
business.hasMany(product, {as: 'products', foreignKey: {name: 'business_id', allowNull: false}});
product.belongsTo(business)
user.belongsToMany(business, {through: 'business_owner'});
business.belongsToMany(user, {through: 'business_owner'});


module.exports = {
    Sequelize, 
    sequelize, 
    user,
    business,
    product
};
