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
const routes_commands=require("./routes/commands.js")

// Load DB connection
const db = require('./models/db');

app.use("/produits",routes_produits)
app.use("/commandes",routes_commands)

app.listen(port,()=> {
    console.log("server is listening on port : ",port);
})

module.exports = app;
