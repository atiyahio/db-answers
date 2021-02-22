const Sequelize = require('sequelize');
const { Model } = Sequelize;

const sequelize = require('../connection');

/** returns the lead model */
class Lead extends Model {}

Lead.init(
  {
    // order: {
    //   type: Schema.Types.ObjectId,
    //   required: true,
    //   ref: 'Order',
    // },
    // service: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Service',
    //   required: true,
    // },
    contacted: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    coins: {
      type: Sequelize.INTEGER,
      defaultValue: 4,
    },
  },
  {
    sequelize,
    modelName: 'lead',
  }
);

module.exports = Lead;
