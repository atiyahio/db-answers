/* eslint-disable new-cap */
const Sequelize = require('sequelize');
const { Model } = Sequelize;

const sequelize = require('../connection');

/** returns the pro model */
class Pro extends Model {}

Pro.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    overview_hired: {
      type: Sequelize.STRING,
    },
    overview_confirmed: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    overview_employees_count: {
      type: Sequelize.INTEGER,
    },
    overview_year_founded: {
      type: Sequelize.INTEGER,
    },
    overview_phone: {
      type: Sequelize.STRING,
    },
    overview_website: {
      type: Sequelize.STRING,
    },
    overview_address: {
      type: Sequelize.ARRAY(Sequelize.TEXT),
    },
    description: {
      type: Sequelize.TEXT,
    },
    profile_image: {
      type: Sequelize.STRING,
    },
    work_images: {
      type: Sequelize.ARRAY(Sequelize.TEXT),
    },
    payments: {
      type: Sequelize.ARRAY(Sequelize.TEXT),
    },
    pricing_display: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    pricing_contact: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    pricing_manual_hourly_price: {
      type: Sequelize.STRING,
      defaultValue: '',
    },
    pricing_manual_estimated: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    pricing_manual_starting: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    social_media_telegram: {
      type: Sequelize.STRING,
      defaultValue: '',
    },
    social_media_facebook: {
      type: Sequelize.STRING,
      defaultValue: '',
    },
    social_media_instagram: {
      type: Sequelize.STRING,
      defaultValue: '',
    },
    review_average: {
      type: Sequelize.FLOAT,
      defaultValue: 0,
    },
    work_time: {
      type: Sequelize.TEXT,
    },
  },
  {
    sequelize,
    modelName: 'pro',
  }
);

module.exports = Pro;
