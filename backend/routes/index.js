const express = require('express');
const router = express.Router();
const userCtrl = require('../controller/user');
const queueCtrl = require('../controller/queue')
// Users Routes
router.get('/users', userCtrl.fetch);
router.post('/users', userCtrl.create);

// Queue Routes
router.get('/queue', queueCtrl.fetch);
router.post('/queue', queueCtrl.create);

module.exports = router;
