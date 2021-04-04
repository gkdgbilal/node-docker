'use strict';

const express = require('express');

// Constants
const PORT = 5555;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/staj', (req, res) => {
  res.send('Hello World from Node.JS!');
});

app.listen(PORT, HOST);
console.log(`Running on http://localhost:${PORT}/staj`);