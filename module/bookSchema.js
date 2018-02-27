var mongoose = require('mongoose')
var bookSchema = new mongoose.Schema({
	name: String,
	price: Number,
	summary: String,
	author: String
})

bookSchema.statics.findBook = function(obj, callback) {
	this.find(obj,callback)
}

bookSchema.statics.updateBook = function(obj,newObj,callback) {
	this.update(obj,newObj,callback)
}

bookSchema.statics.removeBook = function(obj,callback) {
	this.remove(obj,callback)
}

module.exports = bookSchema;