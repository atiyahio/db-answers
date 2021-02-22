const Sequelize = require('sequelize');
const { Model } = Sequelize;

const sequelize = require('../connection');

/** returns the message model */
class Message extends Model {}

Message.init(
  {
    status: {
      type: Sequelize.STRING,
      default: '',
    },
    text: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    unread_pro: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    unread_user: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: 'message',
  }
);

module.exports = Message;
