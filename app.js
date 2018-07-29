require('./config/config')

const express = require('express'),
   mongoose = require('mongoose'),
   bodyParser = require('body-parser'),
   app = express(),
   port = process.env.PORT;

// PARSE application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
   extended: false
}))

// PARSE application/json
app.use(bodyParser.json())

// ROUTES
app.use(require('./routes/index'))

// DATABASE
mongoose.connect(process.env.DB, err => err || console.log('DB connection established'))

app.listen(port, () => console.log(`Server running at port: ${port}`));