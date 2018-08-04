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
         username: userDB.username,
         email: userDB.email
      }, process.env.SEED, {expiresIn: 60 * 60});

      res.json({
         user: {
            username: userDB.username,
            email: userDB.email,
            token
         }
      })

   })
})


module.exports = app;