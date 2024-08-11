
const express = require('express')
const path = require('path')
const app = express()
 port = 3000
require("dotenv").config()
// const configViewEngine = require('./config/viewEngine')
const connectDB = require('./config/database');

connectDB();
// const webRoutes = require('./routes/web');
const productRoutes = require('./routes/productRoute');
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// app.use('/', webRoutes);
app.use('/', productRoutes);
// configViewEngine(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})