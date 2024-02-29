const { to } = require('await-to-js');
const userSvc = require('../services/user');

async function fetch(req, res) {
  const [err, data] = await to(userSvc.fetch());
  res.send(data);
  if (err) throw res.send(err);
  return data;
}

module.exports = {
  fetch,
};
