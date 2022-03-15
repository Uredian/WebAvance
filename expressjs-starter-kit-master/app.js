const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/",(req,res)=>{
    
    res.send("test");
})

const routes=require("./routes/products.js")

// Load DB connection
const db = require('./models/db');

app.use("/produits",routes)

app.listen(port,()=> {
    console.log("server is listening on port : ",port);
})

module.exports = app;
