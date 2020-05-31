const { expect } = require('chai');
const request = require('request');

describe('integration test', () => {
  it('Main page content', (done) => {
    request('http://localhost:3010', (error, response, body) => {
      expect(body).to.equal('Hello World!');
      done();
    });
  });
});
