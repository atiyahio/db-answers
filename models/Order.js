/* eslint-disable new-cap */
const Sequelize = require('sequelize');
const { Model } = Sequelize;

const sequelize = require('../connection');

/** returns the order model */
class Order extends Model {}

Order.init(
  {
    pros: {
      type: Sequelize.ARRAY({
        type: Sequelize.INTEGER,
        references: 'pros',
      }),
    },
    coins: {
      type: Sequelize.INTEGER,
      defaultValue: 4,
    },
    targeted: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    info: {
      type: Sequelize.STRING,
      defaultValue: '',
    },
    closed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    expiry_date: {
      type: Sequelize.DATE,
    },
    answers: {
      type: Sequelize.ARRAY(Sequelize.TEXT),
    },
  },
  {
    sequelize,
    modelName: 'order',
  }
);

module.exports = Order;
