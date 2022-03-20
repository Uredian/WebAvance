//Importing the database
var dbConn = require("./db.js");

//Definition of a product
var Product = function (product) {
	this.Reference = product.Reference;
	this.Titre = product.Titre;
	this.Description = product.Description;
	this.Prix = product.Prix;
	this.Quantité = product.Quantité;
	this.Image = product.Image;
}

//Method to find all products
Product.findAll = function (result) {
	let query = dbConn.query("SELECT * FROM Produit", function (error, response) {
		if (error) {
			console.log("error = ", error)
			result(null, error)
		}
		else {
			result(null, response)
		}
	})
}

//Method that allows to decrement the quantity of a pizza identified by its id of numberOfPizzasToBeDecremented
Product.decrementQuantity = function (id, numberOfPizzasToBeDecremented, result) {
	currentQuantity = 0
	let query_get_quantity = dbConn.query("SELECT Quantite FROM Produit WHERE Reference=?", [id], function (error, response) {
		if (error) {
			console.log("error = ", error)
			result(null, error)
		}
		else {

			currentQuantity = response[0].Quantite
			quantityAfterDecrementation = currentQuantity - numberOfPizzasToBeDecremented

			if (quantityAfterDecrementation <= 0) {
				result("ERROR : The pizza is no longer available !!", null)
			}
			else {
				let query = dbConn.query("UPDATE Produit SET Quantite=? WHERE Reference=?", [quantityAfterDecrementation, id], function (error, response) {
					if (error) {
						console.log("error = ", error)
						result(null, error)
					}
					else {
						result(null, response)
					}
				})
			}
		}
	})
}

//Method to find a product by it's id
Product.FindById = function (id, result) {
	let query_get_quantity = dbConn.query("SELECT * FROM Produit WHERE Reference=?", [id], function (error, response) {
		if (error) {
			console.log("error = ", error)
			result(null, error)
		}
		else {
			result(null, response)
		}
	})
}


module.exports = Product;
