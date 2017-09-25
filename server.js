const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config.json');

const questionApiRouter = require('./module/question/questionApiRouter');
const questionViewRouter = require('./module/question/questionViewRouter');

let app = express();

app.use(bodyParser.urlencoded({ extended : true }));
app.engine('handlebars', handlebars({}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
	res.render('rule');
})

app.get('/ask/:id', (req, res) => {
	res.render('home', {
		question : "Choose a number from 1 to 10",
		count : 0,
		idNum : req.params.id
	});
});

app.get('/final', (req, res) => {
	res.render('final');
})

app.post('/api/question/:id', (req, res) => {
	console.log(req.body.option);
	// fileController.updateQuestion(req.params.id, {`num${req.body.option}` : 1});
	if (req.params.id < 6) {
		res.redirect(`/ask/${parseInt(req.params.id)+1}`);
	} else {
		res.redirect('/final');
	}
})

app.post('/playnow', (req, res) => {
	res.redirect('/ask/1');
});



// app.use('/', questionViewRouter);
// app.use('/api/question', questionApiRouter);


// app.get('/about', (req, res) => {
//   let questionList = [{ id : 1, question : 'test'}, {id : 2, question : 'test1'}]
//   res.render('about',{ questionList });
// });

// app.use(express.static(__dirname + '/public'));

// //localhost
// mongoose.connect(config.connectionString, (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('connect success');
//     }
// });

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
