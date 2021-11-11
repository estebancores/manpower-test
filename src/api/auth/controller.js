const jwt = require('jsonwebtoken')
const UserModel = require('../users/models')
const config = require('../../config/index')

exports.login = async (req, res) => {
    try {
        const  { email, password } = req.body
        console.log(email, password)
        const user = await UserModel.getUserByEmail(email)
        if (!user) {
            throw Error('Error, usario o contraseña inválidos')
        }
        if (password !== user.password){
            throw Error('Error, usario o contraseña inválidos')
        }

        const token = jwt.sign(
          { email: user.email, name: user.name },
          config.jwtSecret,
          { expiresIn: '2h' }
        )

        const dataResponse = {
            user: { email, name: user.name },
            token
        }
        res.json({ data: dataResponse,message: 'Usuario inicio sesión correctamente' })

    } catch (e) {
      res.status(400).json({ data: null, message: e.message || 'Error al iniciar sesión' })
    }
}
