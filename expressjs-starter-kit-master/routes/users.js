const express = require('express'),
    router = express.Router(),
    UsersController = require('../controllers/users.js');
    console.log(UsersController)
    //productsController.findAll()
router.get("/a",UsersController.findAll)
router.post("/create",UsersController.create)

// router.route('/:id')
//     .get(userController.getUser);

// router.route('/:id/edit')
//     .get(userController.editUser)
//     .post(userController.updateUser);

// router.route('/:id/delete')
//     .get(userController.deleteUser);

module.exports = router;
