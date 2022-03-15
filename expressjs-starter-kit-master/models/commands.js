var dbConn = require("./db.js");

var Commands = function (command){
	this.Id=command.Id;
    this.Utilisateur=command.Utilisateur;
    this.ListeProduits=command.ListeProduits;
    this.Valide=command.Valide;
}

Commands.create = function ( newcommmands, result){
    let query=dbConn.query("INSERT INTO Commande set ?",newcommmands,function(err,res){
		if (err){
			console.log("error = ",err)
			result(null,err)
		}
		console.log("NOUVELLE COMMMANDE :",res.insertId)
		result(null,res.insertId)
	})
}


Commands.findAll = function (result){
	let query=dbConn.query("SELECT * FROM Commande",function(err,res){
		if (err){
			console.log("error = ",err)
			result(null,err)
		}
		console.log("Commande :",res)
		result(null,res)
	})
}



Commands.FindById= function (id,result){
	let query_get_quantity=dbConn.query("SELECT * FROM Commande WHERE id=?",[id],function(err,res){
		if (err){
			console.log("error = ",err)
			result(null,err)
		}
		result(null,res)
	})
}


module.exports= Commands;
