const { Sequelize, DataTypes } = require('sequelize');
const { Model } = Sequelize;

const sequelize = require('../connection');

/** returns the question model */
class Question extends Model {}

Question.init(
  {
    type: {
      type: Sequelize.STRING,
      default: 'question',
      // question , calendar, time
    },
    skip: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      // question is skipable or not
    },
    input_bar: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      // question is had input bar or not
    },
    client_only: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      // question is for only client or not
    },
    filter_show: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      // question is shown in pro filter or not
    },
    pro_page: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      // question is shown in pro page or not
    },
    is_template: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      // question is template or not
    },
    general: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: 'question',
  }
);

module.exports = Question;
