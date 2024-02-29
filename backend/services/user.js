const User = require('../models/users');

async function fetch() {
  try {
    const data = await User.find({});
    return data;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  fetch,
};
