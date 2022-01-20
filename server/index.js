const express = require('express');
const db = require('../db/connect.js');

const app = express();

app.use(express.json());



const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});