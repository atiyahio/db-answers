const { Sequelize } = require('sequelize');

const { Model } = Sequelize;

const sequelize = require('../connection');

/** returns the service model */
class Service extends Model {}

Service.init(
  {
    titleUZ: {
      type: Sequelize.STRING,
      defaultValue: '',
    },
    titleRU: {
      type: Sequelize.STRING,
      defaultValue: '',
    },
    titleEN: {
      type: Sequelize.STRING,
      defaultValue: '',
    },
    imageUrl: {
      type: Sequelize.STRING,
    },
    main: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    keywords: {
      // eslint-disable-next-line new-cap
      type: Sequelize.ARRAY(Sequelize.TEXT),
      defaultValue: [],
    },
  },
  {
    sequelize,
    modelName: 'service',
  }
);

module.exports = Service;
