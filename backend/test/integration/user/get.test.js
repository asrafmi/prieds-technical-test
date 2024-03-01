const request = require('supertest');
const app = require('../../../app'); // your express app
const User = require('../../../models/user');
const usersExamples = require('../../../bin/example/user.json');
const { truncateUser, seedUser } = require('../../fixtures/user');

jest.mock('../../../models/user');

describe('User API', () => {
  beforeAll(async () => {
    await truncateUser();
    await seedUser();
  });

  afterAll(async () => {
    await truncateUser();
  });

  it('should fetch all users', async () => {
    const res = await request(app).get('/api/users'); // replace with your actual endpoint
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(usersExamples);
  });

//   it('should create a user', async () => {
//     const mockData = usersExamples[0];
//     User.findOne.mockResolvedValue(null);
//     User.create.mockResolvedValue(mockData);

//     const res = await request(app).post('/api/users').send(mockData); // replace with your actual endpoint
//     expect(res.statusCode).toEqual(200);
//     expect(res.body).toEqual(mockData);
//   });

  //   it('should not create a user with duplicate email', async () => {
  //     const mockData = usersExamples[0];
  //     User.findOne.mockResolvedValue(mockData);

  //     const res = await request(app).post('/api/users').send(mockData); // replace with your actual endpoint
  //     expect(res.statusCode).toEqual(409);
  //   });

  //   it('should not create a user with duplicate mobile', async () => {
  //     const mockData = { email: 'john@example.com', mobile: '1234567890' };
  //     User.findOne.mockResolvedValueOnce(null).mockResolvedValueOnce(mockData);

  //     const res = await request(app).post('/api/users').send(mockData); // replace with your actual endpoint
  //     expect(res.statusCode).toEqual(409);
  //   });
});
