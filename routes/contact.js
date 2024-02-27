const express = require('express');
const path = require('path')

const contactController =  require('../controllers/contact')

const router = express.Router();

router.get('/contact',contactController.cont );

module.exports = router;
