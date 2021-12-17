const dotenv = require('dotenv').config();

module.exports ={
  BCRYPT_SALT: process.env.BCRYPT_SALT || 12,
  PORT: process.env.PORT || 3000,
  usr: process.env.usr || "AlvaroCalderon",
  pwd: process.env.pwd || "Zxcvbnm11",
  dbName: process.env.dbName || "GraphQL"
}