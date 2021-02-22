const Sequelize = require('sequelize');
const { Model } = Sequelize;

const sequelize = require('../connection');

/** returns the service model */
class Review extends Model {}

Review.init(
  {
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    //   },
    //   pro: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Pro',
    //   },
    //   service: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Service',
    //   },
    rate: {
      type: Sequelize.FLOAT,
      default: 5,
    },
    comment: {
      type: Sequelize.STRING,
    },
  },
  {
    sequelize,
    modelName: 'review',
  }
);

module.exports = Review;
