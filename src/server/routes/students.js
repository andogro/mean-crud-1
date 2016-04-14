var express = require('express');
var router = express.Router();
var Students = require('../models/students');

router.get('/', function(req, res, next) {
  Students.find({}, function(err,students) {
    if(err) {
      return next(err);
    }
    res.status(200).json({
    status: 'success',
    data: students
    });
  });
});

router.get('/:id', function(req,res,next) {
});

router.post('/', function(req, res, next) {
  var student = new Students(req.body);
  student.save(function(err, newstudent) {
    if(err) {
      return next(err);
    }
    res.status(200).json({
    status: 'success',
    data: newstudent
    });
  });
});

router.put('/:id', function(req,res,next) {
  var studentID = req.params.id;
  Student.findbyIDandUpdate(studentID)
})

router.delete('/', function(req,res,next) {
  var studentID = req.params.id;
  Student.findbyIDandUpdate(studentID)
})



module.exports = router;