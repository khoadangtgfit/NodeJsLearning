const express = require('express');
const { getHomepage } = require('../controllers/homeController');
const { getABcPage } = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomepage)

router.get('/abc', getABcPage)

module.exports = router;