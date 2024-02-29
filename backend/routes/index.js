const express = require('express');
const router = express.Router();
const userCtrl = require('../controller/user.controller');
const queueCtrl = require('../controller/queue.controller');
// Users Routes
router.get('/users', userCtrl.fetch);
router.post('/users', userCtrl.create);

// Queue Routes
router.get('/queue', queueCtrl.fetch);
router.post('/queue', queueCtrl.create);
router.get('/queue/:id', queueCtrl.getOne);

module.exports = router;
