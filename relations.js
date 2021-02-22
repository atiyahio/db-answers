const User = require('./models/User');
const Pro = require('./models/Pro');
const Review = require('./models/Review');
const Template = require('./models/Template');
const Service = require('./models/Service');
const Category = require('./models/Category');
const Lead = require('./models/Lead');
const Message = require('./models/Message');
const ProLeads = require('./models/ProLeads');
const Coins = require('./models/Coins');
const Order = require('./models/Order');
const ProService = require('./models/ProService');
const ProAnswer = require('./models/ProAnswer');
const Question = require('./models/Question');
const QuestionText = require('./models/QuestionText');
const Chat = require('./models/Chat');
const OrderPros = require('./models/OrderPros');
const GeneralQuestions = require('./models/GeneralQuestions');

Question.hasMany(QuestionText, { as: 'questionText' });
Question.hasMany(QuestionText, { as: 'descriptionText' });
Question.hasMany(QuestionText, { as: 'choiceText' });

Service.hasMany(Question, { as: 'questions' });
Question.belongsTo(Service, { as: 'service' });

Service.belongsToMany(Question, {
  through: GeneralQuestions,
  as: 'generalQuestions',
});
Question.belongsToMany(Service, {
  through: GeneralQuestions,
  as: 'manyServices',
});

Service.belongsTo(Category, { as: 'category' });
Category.hasMany(Service, { as: 'services' });
Category.hasMany(Service, { as: 'mainService' });

User.hasOne(Pro);
Pro.belongsTo(User);

Pro.hasMany(Review);
Review.belongsTo(Pro);

Pro.hasMany(Template);
Template.belongsTo(Pro);

Pro.hasOne(Coins);
Coins.belongsTo(Pro);

Pro.belongsToMany(Service, { through: ProService });
Service.belongsToMany(Pro, { through: ProService });

Pro.belongsToMany(Category, { through: 'ProCategory' });
Category.belongsToMany(Pro, { through: 'ProCategory' });

Pro.belongsToMany(Lead, { through: ProLeads });
Lead.belongsToMany(Pro, { through: ProLeads });

Service.hasOne(Lead);
Lead.belongsTo(Service);

User.hasMany(Order);
Order.belongsTo(User);

Service.hasMany(Order);
Order.belongsTo(Service);

// Pro.hasMany(Order);
// Order.belongsTo(Pro);

Order.hasOne(Lead);
Lead.belongsTo(Order);

Chat.belongsTo(Pro);
Chat.belongsTo(User);
Chat.belongsTo(Order);

Chat.hasMany(Message);
Message.belongsTo(Chat, {
  foreignKey: 'chatId',
  as: 'ChatID',
});
Message.belongsTo(User);
Message.belongsTo(Pro);

Pro.hasMany(ProAnswer);
ProAnswer.belongsTo(Pro);

Question.hasMany(ProAnswer);
ProAnswer.belongsTo(Question);

Order.belongsToMany(Pro, { through: OrderPros, as: 'orders' });
Pro.belongsToMany(Order, { through: OrderPros, as: 'pros' });
