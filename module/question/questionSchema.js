const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  question : {
    type : String,
    require : true
  },
  numberOfQuestion : {
    type : Number,
    require : true
  },
  numberYouChoose : {
    type : Number,
    require : true
  }
});

module.exports = mongoose.model('question', questionSchema);
