//Importing model
const Product = require('../models/products.js');

//Call method findAll of Product's model and handling errors 
const findAll = (req, res) => {
	Product.findAll(function (error, products_reponse) {
		if (error) {
			res.send(error);
		}
		else {
			console.log("Result of findAll Product", products_reponse)
			res.send(products_reponse)
		}
	})
}

//Call method decrementQuantity of Product's model and handling errors 
const decrementQuantity = (req, res) => {
	Product.decrementQuantity(req.params.id, req.params.numberOfPizzasToBeDecremented, function (error, product_after_decrementation) {
		if (error) {
			res.send(error)
		}
		else {
			console.log("Result of decrementQuantity Product", product_after_decrementation)
			res.send(product_after_decrementation)
		}
	})
}

//Call method findById of Product's model and handling errors
const findById = (req, res) => {
	Product.findById(req.params.id, function (error, product_response) {
		if (error) {
			res.send(err)
		}
		else {
			console.log("Result of findAll Product", product_response)
			res.send(product_response)
		}
	})
}

module.exports = { findAll, decrementQuantity, findById }