const express = require('express');
const path = require('path');
require('dotenv').config();
const port = process.env.PORT;

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
  })

app.get('styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../styles.css'))
  })

app.use(express.json());

app.listen(port, () => {
    console.log('Running on port ' + port);
})