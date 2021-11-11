const jwt = require('jsonwebtoken')
const config = require('../config/index')

exports.checkSession = (req, res, next) => {
  const auth = req.headers.authorization
  const token = auth.split(' ').pop()
  const valid = jwt.verify(token, config.jwtSecret)
  if (!valid) {
    res.status(401).json({ data: null, message: 'Error, token no válido' })
  }
  req.user = valid
  next()
}