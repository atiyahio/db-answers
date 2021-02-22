const Sequelize = require('sequelize');
const { Model } = Sequelize;

const sequelize = require('../connection');

/** returns the user model */
class User extends Model {}

User.init(
  {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true,
      },
    },
    phone: {
      type: Sequelize.STRING,
    },
    tgusername: {
      type: Sequelize.STRING,
      defaultValue: '',
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status: {
      type: Sequelize.STRING,
      defaultValue: 'customer',
    },
    imageUrl: {
      type: Sequelize.STRING,
    },
    isAdmin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    isPro: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: 'user',
  }
);

module.exports = User;
