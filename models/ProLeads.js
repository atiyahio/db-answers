const Sequelize = require('sequelize');
const { Model } = Sequelize;

const sequelize = require('../connection');

/** returns the ProLeads model */
class ProLeads extends Model {}

ProLeads.init(
  {
    unread: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: 'proleads',
  }
);

module.exports = ProLeads;
