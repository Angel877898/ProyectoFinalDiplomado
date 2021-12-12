const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment.controller');
const middleware = require('../middleware');


//router.use(middleware);

router.get('/create',middleware,paymentController.create)
router.get('/promos', paymentController.getPromos);
router.post('/applydiscount',middleware,paymentController.applyDiscount);

module.exports = router;
