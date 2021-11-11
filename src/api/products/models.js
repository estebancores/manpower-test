const db = require('../../config/dbConnection')
const dbInstance = () => db.getDbInstance()


const getAll = async () => {
    const db = dbInstance()
    return db('products as a')
      .join('categories as b', 'a.category_id', 'b.id')
      .select('a.*', 'b.name as categoryName')
      .orderBy('id', 'desc')
}

const get = async (id) => {
    const db = dbInstance()
    return db('products').where('id', id)
}

const update = async (id,data) => {
    const db = dbInstance()
    return db('products').update(data).where('id', id)
}

const create = async (data) => {
    const db = dbInstance()
    return db('products').insert(data)
}
const deleteRow = async (id) => {
    const db = dbInstance()
    return db('products').delete().where('id', id)
}

module.exports =  {
    getAll,
    get,
    update,
    create,
    deleteRow
}