const express = require('express');
const path = require('path')

const successController =  require('../controllers/success')


const router = express.Router();

router.post('/success', successController.succ);

module.exports = router;
