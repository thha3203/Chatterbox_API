const express = require('express');
const db = require('../db/connect.js');
const Messages = require('../db/models/Messages.js');

const app = express();

app.use(express.json());

app.get('/messages', (req, res) => {
  const page = parseInt(req.query.page);
  const count = parseInt(req.query.count);
  Messages.aggregate(
    [
      { $skip: count * page },
      { $limit: count}
    ])
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.send('GET MESSAGES ERROR');
    });
});

app.get('/rooms', (req, res) => {
  Messages.distinct('roomname')
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.send('GET ROOMS ERROR');
    });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});