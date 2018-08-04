const express = require('express'),
   User = require('../models/user'),
   jwt = require('jsonwebtoken'),
   app = express();

app.get('/login', (req, res) => {
   res.end('Login...')
})

app.post('/login', (req, res) => {
   User.findOne({username: req.body.username}, async (err, userDB) => {

      /**
       * Check encrypted password
       */
      const validPassword = userDB ? await userDB.checkPassword(req.body.password) : null;

      if (err || !validPassword) {
         return res.json({
            err,
            message: 'Invalid user or password'
         })
      }

      const token = jwt.sign({
         userDB
      }, 'dev-seed', {expiresIn: 60 * 60});

      res.json({
         userDB,
         token
      })

   })
})


module.exports = app;