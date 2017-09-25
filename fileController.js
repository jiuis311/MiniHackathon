const fs = require('fs');
const questionModel = require('./questionSchema.js');


const addNewQuestion = (question, callback) => {
  questionModel.count({}, (err, c) => {
      console.log("Id Num : " + c);
      let newQuestion = {
          question,
          idNum : c,
        };
      questionModel.create(newQuestion, (err, question) => {
        if (err) {
          console.log(err);
        } else {
          callback(question.idNum);
        }
      });
    });
}

const getQuestion = (id, callback) => {
  questionModel.findOne({id : id}, (err, question) => {
    // console.log(question);
    callback(question);
  });
}

const updateQuestion = (id, question, callback) => {
  questionModel.findOneAndUpdate({id : id}, question, {new : true}, (err, question) => {
    callback();
  });
}

module.exports = {
  addNewQuestion,
  getQuestion,
  updateQuestion
}
