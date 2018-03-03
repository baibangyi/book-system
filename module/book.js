const mongoose = require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/book')
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('数据库链接成功')
});

var bookSchema = new mongoose.Schema({
  title:{
    unique:true,
    type:'String'
  },
  summary:'String',
  price:'Number',
  meta:{
    createAt:{
        type:Date,
        default:Date.now()
    }
  }
});

exports.Book=db.model('Book',bookSchema);