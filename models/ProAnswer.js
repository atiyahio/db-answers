/* eslint-disable new-cap */
const Sequelize = require('sequelize');
const { Model } = Sequelize;

const sequelize = require('../connection');

/** returns the ProAnswer model */
class ProAnswer extends Model {}

ProAnswer.init(
  {
    answers: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
  },
  {
    sequelize,
    modelName: 'ProAnswer',
  }
);

module.exports = ProAnswer;
