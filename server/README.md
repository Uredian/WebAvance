# PizzaLoca Server Part

### Definition
This part corresponds to the server part of the "PizzaLoca" web project.
This server will allow to: 
-retrieve the list of all the pizzas with their quantities, prices, representations and descriptions by following the following url => http://localhost:3001/products/
-retrieve information about a pizza => http://localhost:3001/products/pizza_id
-create a user and create an order by making a POST request => http://localhost:3001/users/create
-see the information relative to a user by following this url =>  http://localhost:3001/users/user_id
-get the list and information of all users => http://localhost:3001/users/
-get the list and the information of all orders => http://localhost:3001/orders/
-see the information about an order by following this url =>  http://localhost:3001/orders/order_id

### Tech

The server uses a number of open source projects to work properly:
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [Gulp] - the streaming build system

### Installation
The server part must have **nodejs and mysql** to work 
Please verify by the following line : 
```sh 
node --version && mysql --version
```

Configure your database in the file `models/db.js` : Change the user and the password 
```js
const dbConn = mysql.createConnection(
  {  host     : 'localhost', 
  user     : 'user', 
  password : 'azerty', 
  database : 'web'});
```

Create a database `"web"` and import `web.sql`

Go into root folder of the server and enter the following lines : 
```sh
npm install
npm run assets:build
npm install mysql
npm install cors
```
You can now start your server by : 
```sh
npm run start
```
En cas d'erreur, pensez à modifier le systeme d'autentification de la base de donnée mysql 
`ALTER USER 'user'@'localhost' IDENTIFIED  BY 'password';`
### 

### Reference 
based on project **ExpressJS Starter Kit**" by | [Corentin Mors](https://pixelswap.fr/)
