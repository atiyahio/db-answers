const Sequelize = require('sequelize');
const { Model } = Sequelize;

const sequelize = require('../connection');

/** returns the credit model */
class Credit extends Model {}

Credit.init(
  {
    total_count: {
      type: Sequelize.INTEGER,
      default: 0,
    },
    // pros: [
    //   {
    //     pro: {
    //       type: Schema.Types.ObjectId,
    //       ref: 'Pro',
    //     },
    //     count: {
    //       type: Number,
    //       default: 0,
    //     },
    //   },
    // ],
  },
  {
    sequelize,
    modelName: 'credit',
  }
);

module.exports = Credit;
