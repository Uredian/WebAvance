const express = require('express'),
    router = express.Router(),
    productsController = require('../controllers/products.js');
    console.log(productsController)
    //productsController.findAll()
router.get("/",productsController.findAll)

// router.route('/:id')
//     .get(userController.getUser);

// router.route('/:id/edit')
//     .get(userController.editUser)
//     .post(userController.updateUser);

// router.route('/:id/delete')
//     .get(userController.deleteUser);

module.exports = router;
