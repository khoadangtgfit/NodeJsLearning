const express = require('express');
const { getHomepage } = require('../controllers/homeController');
const { getABcPage } = require('../controllers/homeController');
const { postCreateUser } = require('../controllers/homeController');
const { getCreatePage } = require('../controllers/homeController');
const { getEditPage } = require('../controllers/homeController');
const { postEditUser } = require('../controllers/homeController');
const { postDeleteUser } = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomepage)

router.get('/abc', getABcPage)

router.get('/create', getCreatePage)

router.get('/update/:id', getEditPage);

router.post('/edit-user', postEditUser)

router.post('/create-user', postCreateUser);

router.post('/delete-user/:id', postDeleteUser);

module.exports = router;