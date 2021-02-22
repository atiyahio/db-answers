const Sequelize = require('sequelize');
const { Model } = Sequelize;

const sequelize = require('../connection');

/** returns the category model */
class Category extends Model {}

Category.init(
  {
    // services: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Service',
    //   },
    // ],
    // mainServices: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Service',
    //   },
    // ],
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
    descriptionUZ: {
      type: Sequelize.STRING,
      defaultValue: '',
    },
    descriptionRU: {
      type: Sequelize.STRING,
      defaultValue: '',
    },
    descriptionEN: {
      type: Sequelize.STRING,
      defaultValue: '',
    },
    iconType: {
      type: Sequelize.STRING,
      defaultValue: 'coffee',
    },
    imageUrl: {
      type: Sequelize.STRING,
    },
    showMain: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    // basic_questions: {
    //   calendar: {
    //     has: {
    //       type: Boolean,
    //       default: true,
    //     },
    //     question: {
    //       type: String,
    //       default: 'What day do you need the pro',
    //     },
    //     question_eng: {
    //       type: String,
    //       default: 'What day do you need the pro',
    //     },
    //     question_uz: {
    //       type: String,
    //       default: 'Sizga qaysi kunga kerak',
    //     },
    //     question_ru: {
    //       type: String,
    //       default: 'Какой день тебе нужен профессионал',
    //     },
    //     title: {
    //       type: String,
    //       default: 'When is the event',
    //     },
    //     title_eng: {
    //       type: String,
    //       default: 'When is the event',
    //     },
    //     title_ru: {
    //       type: String,
    //       default: 'Когда это событие',
    //     },
    //     title_uz: {
    //       type: String,
    //       default: 'Hodisa qachon',
    //     },
    //   },
    //   time: {
    //     has: {
    //       type: Boolean,
    //       default: true,
    //     },
    //     question: {
    //       type: String,
    //       default: 'What time do you need the pro',
    //     },
    //     question_eng: {
    //       type: String,
    //       default: 'What time do you need the pro',
    //     },
    //     question_uz: {
    //       type: String,
    //       default: 'Qaysi vaqtda kerak',
    //     },
    //     question_ru: {
    //       type: String,
    //       default: 'Во сколько тебе нужен профессионал',
    //     },
    //     title: {
    //       type: String,
    //       default: '',
    //     },
    //     title_eng: {
    //       type: String,
    //       default: '',
    //     },
    //     title_ru: {
    //       type: String,
    //       default: '',
    //     },
    //     title_uz: {
    //       type: String,
    //       default: '',
    //     },
    //   },
    //   location: {
    //     has: {
    //       type: Boolean,
    //       default: true,
    //     },
    //     question: {
    //       type: String,
    //       default: '',
    //     },
    //     question_eng: {
    //       type: String,
    //       default: '',
    //     },
    //     question_uz: {
    //       type: String,
    //       default: '',
    //     },
    //     question_ru: {
    //       type: String,
    //       default: '',
    //     },
    //     title: {
    //       type: String,
    //       default: '',
    //     },
    //     title_eng: {
    //       type: String,
    //       default: '',
    //     },
    //     title_ru: {
    //       type: String,
    //       default: '',
    //     },
    //     title_uz: {
    //       type: String,
    //       default: '',
    //     },
    //   },
    // },
  },
  {
    sequelize,
    modelName: 'category',
  }
);

module.exports = Category;
