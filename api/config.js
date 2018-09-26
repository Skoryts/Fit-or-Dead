require('dotenv').config({path: '../.env'});

const config = {
  port: process.env.PORT,
  db: process.env.DB_CONNECTION
};

module.exports = config;