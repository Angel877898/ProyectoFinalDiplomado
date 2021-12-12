const express = require('express');
const router = express.Router();
const shipmentController  = require('../controllers/shipment.controller');
const middleware = require('../middleware');

router.use(middleware);

router
    .get('/createshipment', shipmentController.createShipment)
    .get('/changestatus', shipmentController.changeStatus);

module.exports = router;
