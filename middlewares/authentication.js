const jwt = require('jsonwebtoken')

/**
 * Check token
 */
const getToken = (req, res, next) => {
   jwt.verify(req.get('token'), process.env.SEED, (err, decoded) => {
      if (err) {
         res.status(401).json(err)
      }

      req.user = decoded.user

      next()
   })
}

module.exports = getToken