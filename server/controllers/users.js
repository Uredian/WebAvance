//Importing model
const User = require('../models/users.js');
commandsController = require('./orders.js');


//Call method create of User's model, create of order by call of Order's controller and handling errors 
const create = (req, res) => {
	const new_user = new User(req.body);

	ListeProduits = req.body["ListeProduits"]

	if (req.body.constructor == Object && Object.keys(req.body).length === 0) {
		res.send({ error: true, message: "Please provide all mandatory filed" })
	}
	else {
		User.create(new_user, function (error, user) {
			if (error) {
				console.log("Error during the user's creation")
				res.send(error);
			}
			else {
				console.log("Result of create User", user)
				commandsController.create({ "body": { "Utilisateur": user.Id, "ListeProduits": ListeProduits, "user": user } }, res)
			}
		})
	}
}

//Call method findAll of User's model and handling errors 
const findAll = (req, res) => {
	User.findAll(function (error, users_response) {
		console.log("controller")
		if (error) {
			res.send(error);
		}
		else {
			console.log("Result of findAll User", users_response)
			res.send(users_response)
		}
	})
}

//Call method findById of User's model and handling errors 
const findById = (req, res) => {
	User.findById(req.params.id, function (error, user_response) {
		if (error) {
			res.send(error)
		}
		else {
			console.log("Result of findById User", user_response)
			res.send(user_response)
		}
	})
}

module.exports = { findAll, findById, create }
