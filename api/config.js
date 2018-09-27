require('dotenv').config({ path: '../.env', silent: true });

const config = {
  port: process.env.PORT,
  db_uri: process.env.DB_URI
};

module.exports = config;
