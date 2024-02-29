const Queue = require('../models/queue');
const User = require('../models/user');

async function fetch() {
  try {
    const data = await Queue.find({});
    return data;
  } catch (error) {
    throw error;
  }
}

async function create(body) {
  const { mobile } = body;
  try {
    const findUser = await Queue.findOne({ mobile });
    console.log('findUser', findUser);
    if (findUser) {
      throw new Error('Phone number already exists!');
    }
    console.log('Queue.countDocuments()', await Queue.countDocuments());
    let queueNumber = (await Queue.countDocuments()) + 1;
    queueNumber = `A - ${queueNumber.toString().padStart(3, '0')}`;
    let object = {
      ...body,
      queueNumber,
    };
    console.log('object', object);
    const data = await Queue.create({ ...object });
    return data;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  create,
  fetch,
};
