const express = require('express'),
   User = require('../models/user'),
   app = express();

app.get('/login', (req, res) => {
   res.end('Login...')
})

app.post('/login', (req, res) => {
   User.findOne({username: req.body.username}, (err, userDB) => {
      if (!userDB || req.body.password !== userDB.password) {
         return res.json('User or password incorrect')
      }

      res.json(userDB)

   })
})


module.exports = app;