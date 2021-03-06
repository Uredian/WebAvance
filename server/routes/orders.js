const express = require('express'),
    router = express.Router(),
    ordersController = require('../controllers/orders.js');

router.get("/", ordersController.findAll)
router.post("/", ordersController.create)

module.exports = router;