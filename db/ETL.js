const axios = require('axios');
const db = require('./connect.js');
const Messages = require('./models/Messages.js');

const url = 'https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/hr-rfp';

const token = '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';

axios.get(url, { headers: { Authorization: token } })
  .then(res => {
    Messages.insertMany(res.data, (err, docs) => {
      if (err) {
        console.log('INSERT ERROR', err);
      } else {
        console.log(docs);
      }
    });
  })
  .catch(err => console.log('ERROR', err));