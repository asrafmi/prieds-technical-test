const { to } = require('await-to-js');
const userSvc = require('../services/user');

async function fetch(req, res) {
  const [err, data] = await to(userSvc.fetch());
  if (err) {
    res.status(err.status).send({ message: err.message, status: err.status });
  }
  res.send(data);
}

async function create(req, res) {
  const [err, data] = await to(userSvc.create(req.body));
  if (err) {
    res.status(err.status).send({ message: err.message, status: err.status });
  }
  res.send(data);
}

module.exports = {
  fetch,
  create,
};
