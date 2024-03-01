const QueueService = require('../services/queue.service');
const Queue = require('../models/queue');
const CustomError = require('../extends/error');

jest.mock('../models/queue');

describe('Queue Service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch all queues', async () => {
    const mockData = [{ name: 'John', mobile: '1234567890' }];
    Queue.find.mockResolvedValue(mockData);

    const data = await QueueService.fetch();
    expect(data).toEqual(mockData);
  });

  it('should throw an error when fetching queues fails', async () => {
    Queue.find.mockRejectedValue(new Error('Fetch error'));

    await expect(QueueService.fetch()).rejects.toThrow(CustomError.MongoError);
  });

  it('should create a queue', async () => {
    const mockData = { name: 'John', mobile: '1234567890' };
    Queue.findOne.mockResolvedValue(null);
    Queue.countDocuments.mockResolvedValue(0);
    Queue.create.mockResolvedValue(mockData);

    const data = await QueueService.create(mockData);
    expect(data).toEqual(mockData);
  });

  it('should throw an error when creating a queue fails', async () => {
    const mockData = { name: 'John', mobile: '1234567890' };
    Queue.findOne.mockRejectedValue(new Error('Create error'));

    await expect(QueueService.create(mockData)).rejects.toThrow(
      CustomError.MongoError
    );
  });

  it('should get one queue', async () => {
    const mockData = { _id: '1', name: 'John', mobile: '1234567890' };
    Queue.findById.mockResolvedValue(mockData);

    const data = await QueueService.getOne('1');
    expect(data).toEqual(mockData);
  });

  it('should throw an error when getting a queue fails', async () => {
    Queue.findById.mockRejectedValue(new Error('Get error'));

    await expect(QueueService.getOne('1')).rejects.toThrow(
      CustomError.MongoError
    );
  });
});
