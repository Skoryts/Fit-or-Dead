const express = require('express');
const app = express();
const port = 3000;

require('./db');

app.get('/health', (req, res) => res.send('Health check'));

app.listen(port, () => console.log(`API listening on port ${port}`));
