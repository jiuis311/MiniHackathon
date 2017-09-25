const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fileController = require('./fileController.js');
const scoreController = require('./score.js');

const config = require('./config.json');

const questionApiRouter = require('./module/question/questionApiRouter');
const questionViewRouter = require('./module/question/questionViewRouter');

let app = express();

app.use(bodyParser.urlencoded({ extended : true }));
app.engine('handlebars', handlebars({}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
	res.render('rule');
	scoreController.initScore();
})

app.get('/ask/:id', (req, res) => {
	fileController.getQuestion(req.params.id, (tmp) => {
		let count = scoreController.getScore();
		// console.log(tmp);
		res.render('home', {
			question : tmp.question,
			count,
			idNum : req.params.id
		});
	});
});

app.get('/final', (req, res) => {
	res.render('final');
})

app.post('/api/question/:id', (req, res) => {
	console.log('option ' + req.body.option);
	scoreController.addScore(parseInt(req.body.option));
	if (req.params.id < 6) {
		res.redirect(`/ask/${parseInt(req.params.id)+1}`);
	} else {
		res.redirect('/final');
	}
})

app.post('/playnow', (req, res) => {
	res.redirect('/ask/1');
});

app.post('/replay', (req, res) => {
	res.redirect('/');
});



//localhost
mongoose.connect(config.connectionString, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('connect success');
    }
});

app.listen(config.port, () => {
  console.log('server is up at ', config.port);
});
