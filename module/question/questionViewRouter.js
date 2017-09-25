const router = require('express').Router();
const { getQuestionById } = require('./questionController');

router.get('/', (req, res) => {
  let question = getRandomQuestion();

  res.render('home', {
    question    : question,
    questionView: "class='active'"
  });
});

router.get('/ask', (req, res) => {
  res.render('ask', {
    askView: "class='active'"
  });
});

router.get('/question/:id', (req, res) => {
  let id = req.params.id;
  
  getQuestionById(id, (err, question) => {
    if (err) {
      res.send('err');
    } else {
      res.render('question', {
        question,
        questionView: "class='active'"
      });
    }
  })
})

module.exports = router;
