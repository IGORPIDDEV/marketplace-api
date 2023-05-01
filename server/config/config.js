require('dotenv').config({ silent: true })
module.exports = {
  "development": {
    "username": process.env.PG_DATABASE_USERNAME,
    "password": process.env.PG_DATABASE_PASSWORD,
    "database": process.env.PG_DATABASE_NAME,
    "host": process.env.PG_DATABASE_HOST,
    "port": process.env.PG_DATABASE_PORT,
    "dialect": "postgres"
  }
}
