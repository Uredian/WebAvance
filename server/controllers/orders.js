//Importing model
const Order = require('../models/orders.js');
const Product = require('../models/products.js');


const create = (req, res) => {
	console.log(req)
	console.log(req.body)
	const nouvelle_commande = new Order(req.body);
	
	if (req.body.constructor == Object && Object.keys(req.body).length === 0) {
		res.send({ error: true, message: "Please provide all filed" })
	}
	else {
		Order.create(nouvelle_commande, function (err, commande) {
			if (err) {
				res.send(err);
				console.log("erreur de creation de commande")
			}
			else {
				json_commande = JSON.parse(commande["ListeProduits"])
 
				if(Object.keys(json_commande).length == 0){
					res.json({ error: false, message: "Commande bien ajoutée ! ", data: commande })
				}
				else{
					Object.keys(json_commande).forEach(function (key) {
					var value = json_commande[key]

					Product.decrementQuantity(key, value, function (err, product) {
						if (err) {
							res.json({ error: true, message: "Erreur lors de l'ajout de votre commande ! ", data: commande })
							console.log("erreur plus de pizza")
						}
						else {
							res.json({ error: false, message: "Commande bien ajoutée ! ", data: commande })
						}
					})
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
