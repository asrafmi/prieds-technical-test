const CustomError = require('../extends/error');
const Queue = require('../models/queue');
const User = require('../models/user');

async function fetch() {
  try {
    const data = await Queue.find({});
    return data;
  } catch (error) {
    throw new CustomError.MongoError(error.message);
  }
}

async function create(body) {
  let { mobile, name } = body;
  try {
    const findUser = await Queue.findOne({ mobile });
    if (findUser) {
      throw new CustomError.ConflictError('Phone number already exists!');
    }

    let queueNumber = (await Queue.countDocuments()) + 1;
    queueNumber = `A - ${queueNumber.toString().padStart(3, '0')}`;
    const qrCode = `${name}-${mobile}`;

    const object = {
      ...body,
      queueNumber,
      qrCode,
    };

    const data = await Queue.create({ ...object });
    return data;
  } catch (error) {
    throw error.status ? error : new CustomError.MongoError(error.message);
  }
}

async function getOne(id) {
  try {
    const data = await Queue.findById(id);
    if (!data) {
      throw new CustomError.HttpNotFound('Queue not found!');
    }
    return data;
  } catch (error) {
    throw error.status ? error : new CustomError.MongoError(error.message);
  }
}

module.exports = {
  create,
  fetch,
  getOne,
};
