// server.test

const request = require('supertest');

const app = require('./server');


describe('Default endpoint', () => {
  it('should return standard service info', async (done) => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('service', 'Article Parser service in Node.js');
    done();
  });
});

describe('Extract an empty URL', () => {
  it('should response failed extraction result', async (done) => {
    const res = await request(app).get(`/article?url=`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'error');
    expect(res.body).toHaveProperty('data');
    expect(res.body).toHaveProperty(
      'error',
      'Could not extract article from an invalid url'
    );
    done();
  });
});

describe('Extract a bad URL', () => {
  it('should response failed extraction result', async (done) => {
    const url = 'https://this-is-not-a-valid-url.to-extract/';
    const res = await request(app).get(`/article?url=${url}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'error');
    expect(res.body).toHaveProperty('data');
    expect(res.body).toHaveProperty(
      'error',
      `Could not retrieve content from "${url}"`
    );
    done();
  });
});

describe('Extract a valid URL', () => {
  it('should return an extracted article', async (done) => {
    const url = 'https://dev.to/ndaidong/6-things-i-just-learned-after-implementing-my-first-deno-web-service-18a8';
    const res = await request(app).get(`/article?url=${url}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'success');
    expect(res.body).toHaveProperty('data');
    expect(res.body.data).toHaveProperty(
      'title',
      '6 things I just learned after implementing my first Deno web service'
    );
    done();
  });
});
