const request = require('supertest');
const user = require('../routes/user');

describe('POST /signup', function () {
  const data = {
    username: 'Jean',
    mail: 'jean@gmail.com',
    password: 'jean13',
    check: false,
  };
  it('should creat new user', function () {
    request(user)
      .post('/signup')
      .send(data) // x-www-form-urlencoded upload
      .set('Accept', 'application/json')
      .expect(function (res) {
        res.body.username = 'Jean';
        res.body.mail = 'jean@gmail.com';
      })
      .expect(201);
  });
});
