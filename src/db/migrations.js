const db = require('../config/dbConnection')
const dbInstance = () => db.getDbInstance()

const createTables = async () => {
  const db = dbInstance()
  try {
    await db.raw(`
    DROP TABLE IF EXISTS "categories" CASCADE;
    CREATE TABLE categories (
      id serial primary key,
      name varchar(255),
      "created_at" timestamp default now(),
      "updated_at" timestamp
    );
  `)

    await db.raw(`
    DROP TABLE IF EXISTS "users" CASCADE;
    CREATE TABLE users (
      id serial primary key,
      name varchar(255),
      email varchar(255) unique,
      password varchar(255),
      "created_at" timestamp default now(),
      "updated_at" timestamp      
    );
  `)

    await db.raw(`
    DROP TABLE IF EXISTS "products";
    CREATE TABLE products (
      id serial primary key,
      category_id int4,
      user_id int4,
      name varchar(255),
      quantity int4,
      "created_at" timestamp default now(),
      "updated_at" timestamp,
      CONSTRAINT fk_users_products FOREIGN KEY ("user_id") REFERENCES users("id"),
      CONSTRAINT fk_categories_products FOREIGN KEY ("category_id") REFERENCES categories("id")
    );
  `)
  } catch (e) {
    console.log('Ocurrio un error creando las tablas :> ', e)
  }
}

createTables()
