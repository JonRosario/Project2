const express = require('express');
const router = express.Router();
const userCtrl = require('../Controllers/userController')

router.get('/', userCtrl.index)

router.get('/:id', userCtrl.show)

module.exports = router