const db = require('../../config/dbConnection')
const dbInstance = () => db.getDbInstance()


const getAll = async () => {
    const db = dbInstance()
    return db('categories').orderBy('id', 'desc')
}

const get = async (id) => {
    const db = dbInstance()
    return db('categories').where('id', id)
}

const update = async (id,data) => {
    const db = dbInstance()
    return db('categories').update(data).where('id', id)
}

const create = async (data) => {
    const db = dbInstance()
    return db('categories').insert(data)
}
const deleteRow = async (id) => {
    const db = dbInstance()
    return db('categories').delete().where('id', id)
}

module.exports =  {
    getAll,
    get,
    update,
    create,
    deleteRow
}