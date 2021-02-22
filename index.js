const Pro = require('./models/Pro');
const Question = require('./models/Question');
const QuestionText = require('./models/QuestionText');
const ProAnswer = require('./models/ProAnswer');
const Service = require('./models/Service');

require('./connection');
require('./relations');

const main = async () => {
  const pros = await Pro.findAll({
    attributes: ['id'],
    include: [
      {
        model: Service,
        attributes: ['id'],
        include: {
          model: Question,
          attributes: ['id'],
          as: 'questions',
          include: [
            {
              model: QuestionText,
              as: 'questionText',
              required: false,
              where: {
                type: 'question',
              },
            },
            {
              model: QuestionText,
              as: 'choiceText',
              required: false,
              where: {
                type: 'choice',
              },
            },
          ],
        },
      },
    ],
  });

  let id = 1;

  const data = await Promise.all(
    pros.map(async (pro) => {
      return await Promise.all(
        pro.services.map(async (service) => {
          return service.questions.map((question) => {
            const proAnswer = {
              id,
              answers: [],
              createdAt: '2020-12-11 01:23:53.941+02',
              updatedAt: '2020-12-11 01:23:53.941+02',
              proId: pro.id,
              questionId: question.id,
            };

            // const proQuestion = question.questionText.find(
            //   (q) => q.belongs === 'pro'
            // );

            const proAnswers = question.choiceText.filter(
              (c) => c.belongs === 'pro'
            );

            if (proAnswers.length > 0) {
              const answers = [];
              proAnswers.forEach((ans) => answers.push(ans.eng));
              proAnswer.answers = answers;
            } else {
              const answers = [];
              question.choiceText.forEach((ans) => answers.push(ans.eng));
              proAnswer.answers = answers;
            }

            id++;

            return proAnswer;
          });
        })
      );
    })
  );

  await Promise.all(
    data.map(async (r) => {
      console.log(r);
      await Promise.all(
        r.map(async (item, i) => {
          await Promise.all(
            item.map(
              async (it) =>
                await ProAnswer.create({
                  answers: it.answers,
                  proId: it.proId,
                  questionId: it.questionId,
                })
            )
          );
        })
      );
    })
  );
};

main()
  .then(() => console.log('DATA ADDED'))
  .catch((err) => console.error(err));
