const { Pool } = require('pg');
const config = require('./config');

class DB {
  constructor() {
    this.pool = new Pool({
      connectionString: config.db,
      ssl: true
    });
  }

  query(query) {
    return new Promise((resolve, reject) => {
      let connectedClient = null;
      this.pool.connect()
        .then(client => {
          connectedClient = client;
          return client.query(query);
        })
        .then(res => {
          connectedClient.release();
          resolve(res);
        })
        .catch(e => {
          connectedClient.release();
          console.log(e);
          reject(e);
        });
    });
  }
}

module.exports = new DB;