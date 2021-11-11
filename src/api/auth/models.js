const db = require('../../config/dbConnection')
const dbInstance = () => db.getDbInstance()


const deleteRow = async (id) => {
    const db = dbInstance()
    return db('madeRequests').delete('*').where('id', id)
}

const getRow = async (id) => {
    const db = dbInstance()
    return db('madeRequests').where('id', id).first()
}

const getRows = async () => {
    const db = dbInstance()
    return db('madeRequests')
}

const saveRow = async (row) => {
  const db = dbInstance()
  const result = await db('madeRequests').insert(row, '*')
  return result
}

const updateRow = async (row, id) => {
    const db = dbInstance()
    return db('madeRequests').update(row, '*').where('id', id)
}


module.exports =  {
    deleteRow,
    getRows,
    getRow,    
    saveRow,
    updateRow
}