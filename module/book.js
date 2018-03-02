const mongoose = require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/book')
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('数据库链接成功')
});

var bookSchema = new mongoose.Schema({
  name: String,
  summary: String,
  price: Number
});

exports.Book=db.model('Book',bookSchema);