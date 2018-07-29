const express = require('express'),
   app = express();

app.get('/login', (req, res) => {
   res.end('Login...')
})

module.exports = app;