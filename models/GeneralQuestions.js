/* eslint-disable new-cap */
const Sequelize = require('sequelize');
const { Model } = Sequelize;

const sequelize = require('../connection');

/** returns the GeneralQuestions model */
class GeneralQuestions extends Model {}

GeneralQuestions.init(
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
    modelName: 'GeneralQuestions',
  }
);

module.exports = GeneralQuestions;
