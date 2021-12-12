const express = require('express');
const router = express.Router();
const operationsController  = require('../controllers/operations.controller');
const middleware = require('../middleware');

router.use(middleware);

router.post("/sum", operationsController.sum);
router.get("/substract", operationsController.substract);
router.get("/divide", operationsController.divide);
router.get("/multiply", operationsController.multiply);

module.exports = router;