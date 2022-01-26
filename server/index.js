const express = require('express');
const path = require('path');
require('dotenv').config();
const port = process.env.PORT;

const app = express();

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, './public/main.js'))
  })

app.use(express.json());


app.listen(port, () => {
    console.log('Running on port ' + port);
})