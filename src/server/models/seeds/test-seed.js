var Students = require('../students');

var data = [
  {
  firstname: 'Kevin',
  lastname: 'Schwartz',
  year: 2001
  },
  {
  firstname: 'Tyler',
  lastname: 'Schwartz',
  year: 1998
  }
];

function runSeed(done) {
    var student = new Students(data[0]);
    student.save();

    done();
};

module.exports = {
    runSeed: runSeed
}