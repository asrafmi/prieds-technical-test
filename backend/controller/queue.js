const { default: to } = require('await-to-js');
const queueSvc = require('../services/queue');

async function fetch(req, res) {
  const [err, data] = await to(queueSvc.fetch());
  res.send(data);
  if (err) throw res.send(err);
}

async function create(req, res) {
  const [err, data] = await to(queueSvc.create(req.body));
  if (err) res.send(err);
  res.send(data);
}

module.exports = {
  fetch,
  create,
};
