require('dotenv').config();

const PASS_WORD =  process.env.PASSWORD
module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: PASS_WORD,
    DB: "employees-database"
  };