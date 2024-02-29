const { to } = require('await-to-js');
const userSvc = require('../services/user');

async function fetch(req, res) {
  const [err, data] = await to(userSvc.fetch());
  res.send(data);
  if (err) throw res.send(err);
}

async function create(req, res) {
  const [err, data] = await to(userSvc.create(req.body));
  if (err) throw res.send;
  res.send(data);
}

module.exports = {
  fetch,
  create,
};
