const express = require('express'),
    router = express.Router(),
    productsController = require('../controllers/products.js');

router.get("/", productsController.findAll)
router.get("/decrement/:id/:numberOfPizzasToBeDecremented", productsController.decrementQuantity)
router.get("/:id", productsController.findById)


module.exports = router;
