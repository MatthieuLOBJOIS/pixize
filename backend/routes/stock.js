const express = require('express');

const router = express.Router();
const multer = require('../middlewares/multer-config');

const stockCtrl = require('../controllers/stock');

router.get('/', stockCtrl.getAllStock);
router.get('/:id', stockCtrl.getUserStock);
router.post('/:id', multer, stockCtrl.createStock);

module.exports = router;
