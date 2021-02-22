const Sequelize = require('sequelize');
const { Model } = Sequelize;

const sequelize = require('../connection');

/** returns the template model */
class Template extends Model {}

Template.init(
  {
    title: {
      type: Sequelize.STRING,
      defaultValue: '',
    },
    isFixed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    priceType: {
      type: Sequelize.STRING,
      defaultValue: 'fixed',
    },
    price: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    text: {
      type: Sequelize.TEXT,
      defaultValue: '',
    },
    file: {
      type: Sequelize.STRING,
    },
  },
  {
    sequelize,
    modelName: 'template',
  }
);

module.exports = Template;
