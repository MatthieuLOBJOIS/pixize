const request = require('supertest');
const stock = require('../routes/stock');

describe('GET /stock', function () {
  it('responds with json', function () {
    request(stock)
      .get('/')
      .set('Accept', 'application/json')
      .then((resp) => {
        resp.expect(200).expect('Content-Type', /json/);
      });
  });
});
