const Sequelize = require('sequelize');
const { Model } = Sequelize;

const sequelize = require('../connection');

/** returns the coins model */
class Coins extends Model {}

Coins.init(
  {
    // pro: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Pro',
    //   },
    count: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: 'coins',
  }
);

module.exports = Coins;
