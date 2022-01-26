const express = require('express');
const path = require('path');
require('dotenv').config();
const port = process.env.PORT;

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
  })


app.use(express.json());

app.use('/css', express.static(path.join(__dirname, 'styles.css')));



app.listen(port, () => {
    console.log('Running on port ' + port);
})