const Pro = require('./models/Pro');
const Question = require('./models/Question');
const QuestionText = require('./models/QuestionText');
const ProAnswer = require('./models/ProAnswer');
const Service = require('./models/Service');

require('./connection');
require('./relations');

const main = async () => {
  const questions = await QuestionText.findAll({
    where: {
      belongs: 'pro',
      type: 'question',
    },
  });

  await Promise.all(
    questions.forEach(async (q) => {
      //   console.log(q.multiple);
      q.multiple = true;
      await q.save();
    })
  );
};

main()
  .then(() => console.log('DATA EDITED'))
  .catch((err) => console.error(err));
