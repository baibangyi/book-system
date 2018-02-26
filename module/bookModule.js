var db = require('./book')
var bookSchema = require('./bookSchema')
var bookModule = db.model('bookModule',bookSchema)

module.exports = bookModule;