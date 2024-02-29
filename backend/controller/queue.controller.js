const { default: to } = require('await-to-js');
const queueSvc = require('../services/queue.service');

async function fetch(req, res) {
  const [err, data] = await to(queueSvc.fetch());
  if (err) {
    res.status(err.status).send({ message: err.message, status: err.status });
  }
  res.send(data);
}

async function create(req, res) {
  const [err, data] = await to(queueSvc.create(req.body));
  if (err) {
    res.status(err.status).send({ message: err.message, status: err.status });
  }
  res.send(data);
}

module.exports = {
  fetch,
  create,
};
