const Sequelize = require('sequelize');
const { Model } = Sequelize;

const sequelize = require('../connection');

/** returns the chat model */
class Chat extends Model {}

Chat.init(
  {
    starred_pro: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    starred_user: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    trashed_pro: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    trashed_user: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    offer_price: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    offer_type: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'chat',
  }
);

module.exports = Chat;
