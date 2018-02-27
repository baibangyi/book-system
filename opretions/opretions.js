var bookModule = require('../module/bookModule')

module.exports = {
	getBooks() {
		return bookModule.find({}).sort({_id:-1}).exec()
	},
	getBook(id) {
		return bookModule.findById(id).exec()
	},
	editBook(id, data) {
		return bookModule.findByIdAndUpdate(id,data).exec()
	},
	addBook(book) {
		return bookModule.create(book)
	},
	delBook(id) {
		return bookModule.findByIdAndRemove(id).exec()
	}
}