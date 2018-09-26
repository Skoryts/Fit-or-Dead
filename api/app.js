const config = require('./config');
const express = require('express');
const app = express();

const db = require('./db');

app.get('/health', (req, res) => {
  db.query('SELECT NOW()')
    .then(result => res.send(`Health check. Time: ${result.rows[0].now}`))
    .catch(e => res.send(`Health check. Something is wrong. ${e}`));
});

app.listen(config.port, () => console.log(`API listening on port ${config.port}`));
