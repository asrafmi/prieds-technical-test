const express = require('express');
const router = express.Router();
const userCtrl = require('../controller/user');

/* GET home page. */
router.get('/users', userCtrl.fetch);

module.exports = router;
