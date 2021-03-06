const {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_NAME
} = process.env;

module.exports = {
  "type": "postgres",
  "host": DATABASE_HOST,
  "port": DATABASE_PORT,
  "username": DATABASE_USERNAME,
  "password": DATABASE_PASSWORD,
  "database": DATABASE_NAME,
  "synchronize": true,
  "logging": true,
  "entities": [
    "src/entity/*.*"
  ]
}