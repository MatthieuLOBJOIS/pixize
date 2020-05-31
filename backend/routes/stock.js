const express = require('express');

const router = express.Router();
const stockCtrl = require('../controllers/stock');

router.get('/', stockCtrl.getAllStock);

module.exports = router;
