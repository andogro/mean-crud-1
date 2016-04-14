var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentSchema = new Schema ({
 
 firstname: {
  type: String,
  required: true
 },
 lastname: {
  type: String,
  required: true
 },
 year: {
  type: Number,
  required: true
 }
});

var Student = mongoose.model('student', StudentSchema);

module.exports = Student;