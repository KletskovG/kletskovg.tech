const app = require('../src/app');
const supertest = require('supertest');
const request = supertest(app);

it('Gets the test endpoint', async done => {
  const res = await request.get('/check');
  expect(res.status).toBe(200);
  done()
});
