process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../src/server/app');
var should = chai.should();
var testUtilities = require('../utilities');
var testSeed = require('../../src/server/models/seeds/test-seed')

chai.use(chaiHttp);


describe('student routes', function() {


  beforeEach(function(done) { 
   testUtilities.dropDatabase();
   testSeed.runSeed(done);
  });

  afterEach(function(done) {
    testUtilities.dropDatabase(done);
  });

  describe('/GET students', function() {

    it('should return all students', function(done) {
    chai.request(server)
   .get('/students')
   .end(function(err,res) {
      res.status.should.equal(200);
      res.type.should.equal('application/json');
      res.body.should.be.a('object');
      res.body.should.have.property('status');
      res.body.should.have.property('data');
      res.body.status.should.equal('success');
      res.body.data.should.be.a('array');
      res.body.data.length.should.equal(1);
      console.log(res.body.data[0]);
      res.body.data[0].firstname.should.equal('Kevin');
      res.body.data[0].lastname.should.equal('Schwartz');
      res.body.data[0].year.should.equal(2001);
      done();
      });
    });
  });

    describe('/POST students', function() {

    it('should add a new student', function(done) {
    chai.request(server)
   .post('/students').send({ firstname: "Test", lastname: "Tster", year: 1922 })
   .end(function(err,res) {
      res.status.should.equal(200);
      res.type.should.equal('application/json');
      res.body.should.be.a('object');
      res.body.should.have.property('status');
      res.body.should.have.property('data');
      res.body.status.should.equal('success');
      res.body.data.should.be.a('object');
      console.log(res.body.data);
      // res.body.data.length.should.equal(1);
      res.body.data.firstname.should.equal('Test');
      res.body.data.lastname.should.equal('Tster');
      res.body.data.year.should.equal(1922);
      done();
      });
    });
  });

});