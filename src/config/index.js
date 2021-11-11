require('dotenv').config()

const conn = `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@localhost:5432/`
const config = {
    dbConnection: conn + process.env.DB_NAME,
    ddosConfig: { burst: 100, limit: 100 },
    port: process.env.PORT || 9000,
    jwtSecret: process.env.JWT_SECRET_KEY || 'test'
}

module.exports = config
