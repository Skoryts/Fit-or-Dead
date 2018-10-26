const { Pool } = require('pg');
const config = require('./config');

class DB {
  constructor() {
    this.pool = new Pool({
      connectionString: config.db_uri,
      ssl: true,
    });
  }

  async query(q) {
    const client = await this.pool.connect();
    const response = await client.query(q);
    client.release();
    return response;
  }
}

module.exports = new DB();
