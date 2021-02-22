const { Sequelize, DataTypes } = require('sequelize');

const { Model } = Sequelize;

const sequelize = require('../connection');

/** returns the question model */
class QuestionText extends Model {}

QuestionText.init(
  {
    uz: {
      type: Sequelize.STRING,
      defaultValue: '',
    },
    eng: {
      type: Sequelize.STRING,
      defaultValue: '',
    },
    ru: {
      type: Sequelize.STRING,
      defaultValue: '',
    },
    belongs: {
      type: DataTypes.STRING,
      defaultValue: 'client',
      // text is belongs to whom, client or pro
    },
    group_id: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      // group_id for more question, in order find client and pro question pair.
    },
    type: {
      type: DataTypes.STRING,
      defaultValue: 'question', // question, choice, description
    },
    multiple: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    proChoiceId: {
      type: Sequelize.INTEGER,
      unique: true,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'question_text',
  }
);

module.exports = QuestionText;
