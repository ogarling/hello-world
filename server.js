'use strict';

const express = require('express');

// Constants
const PORT = 8000;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello world automated build\r\nWatchtower come in please');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);