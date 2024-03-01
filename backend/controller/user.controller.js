const { to } = require('await-to-js');
const userSvc = require('../services/user.service');

async function fetch(req, res) {
  const [err, data] = await to(userSvc.fetch());
  if (err) {
    res.status(err.status).send({ message: err.message, status: err.status });
  }
  res.send(data);
}

async function create(req, res) {
  let { birthdate, email } = req.body;
  if (email.indexOf('@') === -1) {
    res.status(400).send({ message: 'Invalid email!', status: 400 });
    return;
  }
  birthdate = new Date(birthdate).toISOString();
  const obj = { ...req.body, birthdate };
  const [err, data] = await to(userSvc.create(obj));
  if (err) {
    res.status(err.status).send({ message: err.message, status: err.status });
  }
  res.send(data);
}

module.exports = {
  fetch,
  create,
};
