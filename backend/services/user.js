const User = require('../models/user');

async function fetch() {
  try {
    const data = await User.find({});
    return data;
  } catch (error) {
    throw error;
  }
}

async function create(body) {
  const { email, mobile } = body;
  try {
    const findUser = await User.findOne({ email });
    if (findUser) {
      throw new Error('Email already exists!');
    }
    const findMobile = await User.findOne({ mobile });
    if (findMobile) {
      throw new Error('Phone already exists!');
    }
    const data = await User.create({ ...body });
    return data;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  fetch,
  create,
};
