//Importing model
const Order = require('../models/orders.js');
productsController = require('../controllers/products.js');

//Call method create of Order's model, decrement quantity of pizzas ordered and handling errors 
const create = (req, res) => {
	const new_order = new Order(req.body);

	if (req.body.constructor == Object && Object.keys(req.body).length === 0) {
		res.send({ error: true, message: "Please provide all mandatory filed" })
	}
	else {
		Order.create(new_order, function (error, commande) {
			if (error) {
				res.send(error);
				console.log("erreur de creation de commande")
			}
			else {
				json_order = JSON.parse(commande["ListeProduits"])

				if (Object.keys(json_order).length == 0) {
					res.json({ error: false })
				}
				else {
					//ForEach pizza in the order, call decrementQuantity of Product's controller that decrement the number of remaining pizzas
					Object.keys(json_order).forEach(function (id_pizza) {
						var numberOfPizzasToBeDecremented = json_order[id_pizza]
						productsController.decrementQuantity({ "params": { "id": id_pizza, "numberOfPizzasToBeDecremented": numberOfPizzasToBeDecremented } }, res)
					})
				}
			}
		})
	}
}

//Call method findAll of Order's model and handling errors 
const findAll = (req, res) => {
	Order.findAll(function (error, orders_response) {
		if (error) {
			res.send(error);
		}
		else {
			console.log("Result of findAll Order", orders_response)
			res.send(orders_response)
		}
	})
}

//Call method findById of Order's model and handling errors 
const findById = (req, res) => {
	Order.findById(req.params.id, function (error, order_response) {
		if (error) {
			res.send(error)
		}
		else {
			console.log("Result of findAll Order", order_response)
			res.send(order_response)
		}
	})
}

module.exports = { findAll, findById, create }
