//Importing the database
var dbConn = require("./db.js");

//Definition of a user
var User = function (user) {
	this.Id = user.Id;
	this.Nom = user.Nom;
	this.Prenom = user.Prenom;
	this.Email = user.Email;
	this.Adresse_numero = user.Adresse_numero;
	this.Adresse_rue = user.Adresse_rue;
	this.Ville = user.Ville;
	this.Code_postal = user.Code_postal;
};

//Method to find all users
User.findAll = function (cb) { // il vaut mieux nommer cette valeur cb ou callback
	let query = dbConn.query("SELECT * FROM utilisateur", function (error, response) {
		if (error) {
			console.log("error = ", error);
			return cb(null, error); // utiliser return est plus élégant
		}
		cb(null, response);
	});
};

//Method to create a user 
User.create = function (newuser, result) {
	let query = dbConn.query("INSERT INTO utilisateur set ?", newuser, function (error, response) { // pas besoin d'assigner à une variable
		if (error) {
			console.log("error = ", error);
			result(null, error);
		}
		else {
			newuser.Id = response.insertId;
			result(null, newuser);
		}
	});
};

//Method to find a user by id
User.findById = function (id, result) {
	let query_get_quantity = dbConn.query("SELECT * FROM utilisateur WHERE Id=?", [id], function (error, response) {
		if (error) {
			console.log("error = ", error);
			result(null, error);
		}
		else {
			result(null, response);
		}
	});
};


module.exports = User;
