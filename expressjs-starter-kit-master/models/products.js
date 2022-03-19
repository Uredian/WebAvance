var dbConn = require("./db.js");

var Products = function (product){
	this.Reference = product.Reference;
	this.Titre = product.Titre;
	this.Description = product.Description;
	this.Prix=product.Prix;
	this.Quantité = product.Quantité;
	this.Image=product.Image;
}

Products.findAll = function (result){
	let query=dbConn.query("SELECT * FROM Produit",function(err,res){
		if (err){
			console.log("error = ",err)
			result(null,err)
		}
		else{
			//console.log("PRODUIT :",res)
		result(null,res)
		}
		
	})
}

Products.decrementQuantity = function (id,nombre_de_pizza,result){
	quantite_actuelle=0
	let query_get_quantity=dbConn.query("SELECT Quantite FROM Produit WHERE Reference=?",[id],function(err,res){
		if (err){
			console.log("error = ",err)
			result(null,err)
		}
		else{

			quantite_actuelle=res[0].Quantite
		quantite_apres_soustration=quantite_actuelle-nombre_de_pizza

			if(quantite_apres_soustration<=0){
				result("error plus de pizza !!",null)
			}
			else{
				console.log("Quantite :",quantite_actuelle,"Nombre de pizza choisi :",nombre_de_pizza,"Donc",quantite_actuelle-nombre_de_pizza)
			let query=dbConn.query("UPDATE Produit SET Quantite=? WHERE Reference=?",[quantite_apres_soustration,id],function(err,res){
				if (err){
					console.log("error = ",err)
					result(null,err)
				}
				else{
					//console.log("PRODUIT :",res)
				result(null,res)
				}
				
			})


			}
			

		}
		
		
		
	})

	
}

Products.FindById= function (id,result){
	let query_get_quantity=dbConn.query("SELECT * FROM Produit WHERE Reference=?",[id],function(err,res){
		if (err){
			console.log("error = ",err)
			result(null,err)
		}
		else{
			result(null,res)
		}
		
	})
}


module.exports= Products;
