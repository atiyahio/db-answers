/* eslint-disable new-cap */
const Sequelize = require('sequelize');
const { Model } = Sequelize;

const sequelize = require('../connection');

/** returns the ProService model */
class ProService extends Model {}

ProService.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    work_time: {
      type: Sequelize.ARRAY(Sequelize.TEXT),
    },
    pricing_display: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    pricing_manual_hourly_price: {
      type: Sequelize.INTEGER,
    },
    pricing_manual_average: {
      type: Sequelize.INTEGER,
    },
    pricing_manual_starting: {
      type: Sequelize.INTEGER,
    },
  },
  {
    sequelize,
    modelName: 'ProService',
  }
);

module.exports = ProService;
