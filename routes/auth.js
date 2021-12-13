const express = require('express');
const router = express.Router();
const keyStore = require('../key-store');


router.get('/', keyStore);


module.exports = router;
