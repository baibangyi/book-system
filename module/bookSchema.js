var mongoose = require('mongoose')
var bookSchema = new mongoose.Schema({
	name: String,
	price: Number,
	summary: String,
	author: String
})