const express = require('express');

const controller = require('../controllers/controllers.js');

const router = express.Router();

router.get('/', controller.homePage);

router.get('/get/:resource', controller.get);

router.get('/swapi/:resource', controller.swapi);

module.exports = router;
