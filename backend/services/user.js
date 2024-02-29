const User = require('../models/user');
const CustomError = require('../extends/error');

async function fetch() {
  try {
    const data = await User.find({});
    return data;
  } catch (error) {
    throw CustomError.MongoError(error.message);
  }
}

async function create(body) {
  const { email, mobile } = body;
  try {
    const findUser = await User.findOne({ email });
    if (findUser) {
      throw new CustomError.ConflictError('Email already exists!');
    }
    const findMobile = await User.findOne({ mobile });
    if (findMobile) {
      throw new CustomError.ConflictError('Phone already exists!');
    }
    const data = await User.create({ ...body });
    return data;
  } catch (error) {
    throw error.status ? error : new CustomError.MongoError(error.message);
  }
}

module.exports = {
  fetch,
  create,
};
