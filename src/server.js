
const express = require('express')
const path = require('path')
const app = express()
 port = 3000
require("dotenv").config()
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web');
const connection = require('./config/database');
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use('/', webRoutes);
configViewEngine(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})