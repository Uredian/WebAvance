var dbConn = require("./db.js");

var Users = function (user){
	this.Id = user.Id;
    this.Nom=user.Nom
    this.Prenom=user.Prenom
    this.Email=user.Email
    this.Adresse_numero=user.Adresse_numero
    this.Adresse_rue=user.Adresse_rue
    this.Ville=user.Ville
    this.Code_postal=user.Code_postal
}

Users.findAll = function (result){
	let query=dbConn.query("SELECT * FROM Utilisateur",function(err,res){
		if (err){
			console.log("error = ",err)
			result(null,err)
		}
		else{
			
		result(null,res)
		}
		
	})
}

Users.create = function ( newuser, result){
    let query=dbConn.query("INSERT INTO Utilisateur set ?",newuser,function(err,res){
		if (err){
			console.log("error = ",err)
			result(null,err)
		}
		else{
			newuser.Id=res.insertId
		result(null,newuser)
		}
		
		
	})
}

Users.FindById= function (id,result){
	let query_get_quantity=dbConn.query("SELECT * FROM Utilisateur WHERE Id=?",[id],function(err,res){
		if (err){
			console.log("error = ",err)
			result(null,err)
		}
		else{
			result(null,res)
		}
		
	})
}


module.exports= Users;
