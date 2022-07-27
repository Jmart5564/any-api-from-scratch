const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');


describe('mushrooms routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/mushrooms should return a list of mushrooms', async () => {
    const res = await request(app).get('/mushrooms');
    expect(res.body.length).toEqual(6);
    expect(res.body[0]).toEqual({
      id: expect.any(String),
      common_name: expect.any(String),
    });
  });

  it('/mushrooms/:id should return cat detail', async () => {
    const res = await request(app).get('/mushrooms/1');
    const kingBolete = {
      id: '1',
      common_name: 'King Bolete',
      latin_name: 'Boletus edulis',
      spore_color: 'olive-brown',
      ecology: 'mycorrhizal',
      poisonous: false,
    };
    expect(res.body).toEqual(kingBolete);
  });

  afterAll(() => {
    pool.end();
  });
});
