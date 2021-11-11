const db = require('../../config/dbConnection')
const dbInstance = () => db.getDbInstance()


const getAll = async () => {
    const db = dbInstance()
    return db('users').orderBy('id', 'desc')
}

const get = async (id) => {
    const db = dbInstance()
    return db('users').where('id', id)
}

const getUserByEmail = async (email) => {
    const db = dbInstance()
    return db('users').where('email', email).first()
}

const update = async (id,data) => {
    const db = dbInstance()
    return db('users').update(data).where('id', id)
}

const create = async (data) => {
    const db = dbInstance()
    return db('users').insert(data)
}
const deleteRow = async (id) => {
    const db = dbInstance()
    return db('users').delete().where('id', id)
}

module.exports =  {
    getAll,
    get,
    getUserByEmail,
    update,
    create,
    deleteRow
}