/* eslint-disable new-cap */
const Sequelize = require('sequelize');
const { Model } = Sequelize;

const sequelize = require('../connection');

/** returns the OrderPros model */
class OrderPros extends Model {}

OrderPros.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'OrderPros',
  }
);

module.exports = OrderPros;
