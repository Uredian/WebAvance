const express = require('express')
const cors = require("cors")
    app = express(),
    port = process.env.PORT || 3001,
    bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/",(req,res)=>{
    
    res.send("test");
})

const routes_produits=require("./routes/products.js")
const routes_commandes=require("./routes/orders.js")
const routes_users=require("./routes/users.js")

// Load DB connection
const db = require('./models/db');

app.use("/products",routes_produits)
app.use("/orders",routes_commandes)
app.use("/users",routes_users)

app.listen(port,()=> {
    console.log("server is listening on port : ",port);
})

module.exports = app;
