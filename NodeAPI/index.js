const express = require('express');
const bodyParser = require('body-parser');
const stock = require('./router/stock.router.js');
// create express app
const app = express();

const hostname = 'localhost';
const port = 5002;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use("/stock",stock);
app.use("/login",stock);


// listen for requests
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
