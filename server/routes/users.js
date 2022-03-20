const express = require('express'),
    router = express.Router(),
    UsersController = require('../controllers/users.js');

router.get("/a",UsersController.findAll)
router.post("/create",UsersController.create)

module.exports = router;
