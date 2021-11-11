const db = require('../config/dbConnection')
const dbInstance = () => db.getDbInstance()



const insertingUsers = [
  {
    name: 'Test user',
    email: 'email@email.com',
    password : 12345
  }
]

const insertingCategories = [
  { name: 'Tecnología' },
  { name: 'Escritorio' },
  { name: 'Cableado' },
  { name: 'Teclados' },
  { name: 'Gaming' },
  { name: 'Pads' },
  { name: 'Bases refrigerantes' },
  { name: 'Monitores' },
  { name: 'Memoria Ram' },
  { name: 'Decks' },
  { name: 'Mouses' },
  { name: 'Adaptadores' },
  { name: 'HDD' }
]


const UsersSeed = async () => {
  try {
    const db = dbInstance()
    const users = insertingUsers;
    await db.raw('TRUNCATE users CASCADE;')
    for (let i = 0; i < users.length; i++) {
      await db('users').insert(users[i])
    }
  } catch (e) {
    console.log('Error creando ejecutando SEED Usuarios :> ', e)
  }
  console.log('SEED usuarios finalizado')
}

const CategoriesSeed = async () => {
  try {
    const db = dbInstance()
    const categories = insertingCategories;
    await  db.raw('TRUNCATE TABLE categories CASCADE; ')
    for (let i = 0; i < categories.length; i++) {
      await db('categories').insert(categories[i])
    }
  } catch (e) {
    console.log('Error creando ejecutando SEED Categorias :> ', e)
  }
  console.log('SEED categories finalizado')
}

CategoriesSeed()
UsersSeed()
