const mongoose = require('mongoose');

const messagesSchema = new mongoose.Schema({
  message_id: Number,
  roomname: String,
  text: String,
  username: String,
  github_handle: String,
  campus: String,
  created_at: String,
  updated_at: String
});

const Messages = mongoose.model('Messages', messagesSchema);

module.exports = Messages;