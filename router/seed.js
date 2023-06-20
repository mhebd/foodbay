const express = require('express');
const { seed } = require('../controller/seed');
const router = express.Router();

router.route('/').get(seed);

module.exports = router;
