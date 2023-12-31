const mongoose = require('mongoose');
const chai = require('chai');
const expect = chai.expect;
const assert = require('assert');
const { describe, it } = require('mocha');
describe('MongoDB Connection', function() {
  it('should connect to MongoDB', function() {
    return mongoose.connect('mongodb://localhost:27017/storageAction')
      .then(() => {
        console.log('MongoDB connection successful');
      })
      .catch((err) => {
        console.log('MongoDB connection error:', err);
        throw err;
      });
  });
});













// const request = require('supertest');
// const app = require('./app');

// describe('Database connection', () => {
//   it('should connect to MongoDB', (done) => {
//     request(app)
//       .get('/test-db-connection')
//       .expect(200)
//       .end((err, res) => {
//         if (err) return done(err);
//         done();
//       });
//   });
// })

  //mocha --recursive test