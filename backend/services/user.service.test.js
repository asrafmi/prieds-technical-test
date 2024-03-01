const UserService = require('../services/user.service');
const User = require('../models/user');
const CustomError = require('../extends/error');

jest.mock('../models/user');

describe('User Service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch all users', async () => {
    const mockData = [{ email: 'john@example.com', mobile: '1234567890' }];
    User.find.mockResolvedValue(mockData);

    const data = await UserService.fetch();
    expect(data).toEqual(mockData);
  });

  it('should throw an error when fetching users fails', async () => {
    User.find.mockRejectedValue(new Error('Fetch error'));

    await expect(UserService.fetch()).rejects.toThrow(CustomError.MongoError);
  });

  it('should create a user', async () => {
    const mockData = { email: 'john@example.com', mobile: '1234567890' };
    User.findOne.mockResolvedValue(null);
    User.create.mockResolvedValue(mockData);

    const data = await UserService.create(mockData);
    expect(data).toEqual(mockData);
  });

  it('should throw an error when email already exists', async () => {
    const mockData = { email: 'john@example.com', mobile: '1234567890' };
    User.findOne.mockResolvedValue(mockData);

    await expect(UserService.create(mockData)).rejects.toThrow(
      CustomError.ConflictError
    );
  });

  it('should throw an error when mobile already exists', async () => {
    const mockData = { email: 'john@example.com', mobile: '1234567890' };
    User.findOne.mockResolvedValueOnce(null).mockResolvedValueOnce(mockData);

    await expect(UserService.create(mockData)).rejects.toThrow(
      CustomError.ConflictError
    );
  });

  it('should throw an error when creating a user fails', async () => {
    const mockData = { email: 'john@example.com', mobile: '1234567890' };
    User.findOne.mockRejectedValue(new Error('Create error'));

    await expect(UserService.create(mockData)).rejects.toThrow(
      CustomError.MongoError
    );
  });
});
