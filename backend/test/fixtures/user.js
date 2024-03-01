const usersExamples = require('../../bin/example/user.json');
const User = require('../../models/user');

const seedUser = async () => {
  try {
    await User.insertMany(usersExamples);
  } catch (e) {
    throw new Error(e.message);
  }
  return Promise.resolve(usersExamples);
};

const truncateUser = async () => {
  try {
    await User.deleteMany({});
  } catch (e) {
    throw new Error(e.message);
  }
  return Promise.resolve('deleted');
};

module.exports = {
  seedUser,
  truncateUser
};
