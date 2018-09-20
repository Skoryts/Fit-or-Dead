const { Pool } = require('pg');
const connectionString = 'postgres://wqhrrievdwrbco:4bc4d6ecd015e4a72356e19e9ddaebc8c0c343188716a94914489fd2af1be00c@ec2-54-217-236-201.eu-west-1.compute.amazonaws.com:5432/dfocldlmhfo197';

const pool = new Pool({
  connectionString,
  ssl: true
});

(async function(){
  const client = await pool.connect();
  await client.query('SELECT NOW()');
  client.release()
})();
