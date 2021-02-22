const Sequelize = require('sequelize');

const config = require('./config.json');

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
    logging: false,
    port: '5433',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

sequelize
  .authenticate()
  .then(() => console.log('DB Connected.'))
  .catch((err) => console.log('DB CONNECTION ERROR: ', err));

sequelize.sync();

module.exports = sequelize;
