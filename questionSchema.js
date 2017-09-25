const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  question : {
    type : String,
    require : true
  },
  num1 : {
    type : Number,
    default : 0
  },
  num2 : {
    type : Number,
    default : 0
  },
  num3 : {
    type : Number,
    default : 0
  },
  num4 : {
    type : Number,
    default : 0
  },
  num5 : {
    type : Number,
    default : 0
  },
  num6 : {
    type : Number,
    default : 0
  },
  num7 : {
    type : Number,
    default : 0
  },
  num8 : {
    type : Number,
    default : 0
  },
  num9 : {
    type : Number,
    default : 0
  },
  num10 : {
    type : Number,
    default : 0
  },
  id : {
    type : Number,
    default : 0
  },

});

module.exports = mongoose.model('questions', questionSchema);
