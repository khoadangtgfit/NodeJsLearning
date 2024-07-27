
const express = require('express')
const path = require('path')
const app = express()
 port = 3000
require("dotenv").config()
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
app.use('/', webRoutes);
configViewEngine(app);




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})