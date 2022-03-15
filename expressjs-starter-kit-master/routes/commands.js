const express = require('express'),
    router = express.Router(),
    commandsController = require('../controllers/commands.js');

router.get("/a",commandsController.findAll)
router.post("/",commandsController.create)
//router.get("/:id",commandsController.FindById)


// router.route('/:id')
//     .get(userController.getUser);

// router.route('/:id/edit')
//     .get(userController.editUser)
//     .post(userController.updateUser);

// router.route('/:id/delete')
//     .get(userController.deleteUser);

module.exports = router;
