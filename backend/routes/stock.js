const express = require('express');

const router = express.Router();
const multer = require('../middlewares/multer-config');
const auth = require('../middlewares/auth');

const stockCtrl = require('../controllers/stock');

router.get('/', stockCtrl.getAllStock);
router.get('/:id', auth, stockCtrl.getUserStock);
router.post('/:id', auth, multer, stockCtrl.createStock);
router.delete('/:id', auth, stockCtrl.deleteStock);

module.exports = router;
