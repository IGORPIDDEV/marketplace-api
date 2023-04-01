const dotenv = require('dotenv')
const parsedEnv = dotenv.config().parsed
module.exports = {
  "development": {
    "username": parsedEnv.PG_DATABASE_USERNAME,
    "password": parsedEnv.PG_DATABASE_PASSWORD,
    "database": parsedEnv.PG_DATABASE_NAME,
    "host": parsedEnv.PG_DATABASE_HOST,
    "port": parsedEnv.PG_DATABASE_PORT,
    "dialect": "postgres"
  }
}
