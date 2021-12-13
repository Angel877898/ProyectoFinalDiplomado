const express = require('express');
const { route } = require(".");
const router = express.Router();
const tasksController = require('../controllers/tasks.controller');
const middleware = require('../middleware');

router.get('/:id', tasksController.getById);

router.use(middleware);

router
    .post('/', tasksController.create)
    .get('/', tasksController.getAll);

module.exports = router;
