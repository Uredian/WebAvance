var dbConn = require("./db.js");

var Products = function (product){
	this.Reference = product.Reference;
	this.Titre = product.Titre;
	this.Description = product.Description;
	this.Prix=product.Prix;
	this.Quantité = product.Quantité;
}

Products.findAll = function ( result ){
	let query=dbConn.query("SELECT * FROM Produit",function(err,res){
		if (err){
			console.log("error = ",err)
			result(null,err)
		}
		console.log("PRODUIT :",res)
		result(null,res)
	})
}

module.exports= Products;
