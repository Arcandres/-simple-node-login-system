require('./config/config')

const express = require('express'),
   mongoose = require('mongoose'),
   app = express(),
   port = process.env.PORT;


// ROUTES
app.use(require('./routes/index'))

// DATABASE
mongoose.connect(process.env.DB, err => err || console.log('DB connection established'))

app.listen(port, () => console.log(`Server running at port: ${port}`));