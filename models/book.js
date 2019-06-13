const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googlebooks = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: {type: String, required: true,trim: true},  date: { type: Date, default: Date.now },
  image: {type: String,required: true, trim: true},
  link: {type: String, required: true},
});

const Book = mongoose.model("Book", googlebooks);

module.exports = Book;
