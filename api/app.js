const express = require('express');
const config = require('./config');
const db = require('./db');

const app = express();

app.get('/health', async (req, res) => {
  try {
    const time = await db.query('SELECT NOW( 1)');
    res.send(`Health check. Time: ${time.rows[0].now}`);
  } catch (e) {
    res.send(`Health check. Something is wrong. ${e}`);
  }
});

app.listen(config.port, () => console.log(`API listening on port ${config.port}`));
