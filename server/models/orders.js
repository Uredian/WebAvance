//Importing the database
var dbConn = require("./db.js");

//Definition of a product
var Order = function (order) {
	this.Id = order.Id;
	this.Utilisateur = order.Utilisateur;
	this.ListeProduits = order.ListeProduits;
};

//Methode to create an order
Order.create = function (newcommmand, result) {
	let query = dbConn.query("INSERT INTO commande set ?", newcommmand, function (error, response) {
		if (error) {
			console.log("error = ", error);
			result(null, error);
		}
		else {
			newcommmand.Id = response.insertId;
			result(null, newcommmand);
		}
	});
};

//Method to find all orders
Order.findAll = function (result) {
	let query = dbConn.query("SELECT * FROM commande", function (error, response) {
		if (error) {
			console.log("error = ", error);
			result(null, error);
		}
		else {
			console.log("Commande :", response);
			result(null, response);
		}
	});
};


//Method to find an order by id
Order.findById = function (id, result) {
	let query_get_quantity = dbConn.query("SELECT * FROM commande WHERE id=?", [id], function (error, response) {
		if (error) {
			console.log("error = ", error);
			result(null, error);
		}
		else {
			result(null, response);
		}
	});
};


module.exports = Order;
