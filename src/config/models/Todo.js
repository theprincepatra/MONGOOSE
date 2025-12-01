// Schema structure and Model class to work with the collection
const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  desc: {
    type: String,
    default: ""
  },
  isDone: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Model name: "Todo" → collection name: "todos"
module.exports = mongoose.model("Todo", todoSchema);
