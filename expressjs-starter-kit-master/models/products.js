var dbConn = require("./db.js");

var Products = function (product){
	this.Reference = product.Reference;
	this.Titre = product.Titre;
	this.Description = product.Description;
	this.Prix=product.Prix;
	this.Quantité = product.Quantité;
}

Products.findAll = function (result){
	let query=dbConn.query("SELECT * FROM Produit",function(err,res){
		if (err){
			console.log("error = ",err)
			result(null,err)
		}
		console.log("PRODUIT :",res)
		result(null,res)
	})
}

Products.decrementQuantity = function (id,nombre_de_pizza,result){
	quantite_actuelle=0
	let query_get_quantity=dbConn.query("SELECT Quantite FROM Produit WHERE Reference=?",[id],function(err,res){
		if (err){
			console.log("error = ",err)
			result(null,err)
		}
		
		quantite_actuelle=res[0].Quantite
		console.log("Quantite :",quantite_actuelle,"Nombre de pizza choisi :",nombre_de_pizza,"Donc",quantite_actuelle-nombre_de_pizza)
		let query=dbConn.query("UPDATE Produit SET Quantite=? WHERE Reference=?",[quantite_actuelle-nombre_de_pizza,id],function(err,res){
			if (err){
				console.log("error = ",err)
				result(null,err)
			}
			console.log("PRODUIT :",res)
			result(null,res)
		})
	})

	
}

Products.FindById= function (id,result){
	let query_get_quantity=dbConn.query("SELECT * FROM Produit WHERE Reference=?",[id],function(err,res){
		if (err){
			console.log("error = ",err)
			result(null,err)
		}
		result(null,res)
	})
}


module.exports= Products;
