const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

//MongoDB 会自动建立books数据库
const db = mongoose.connect('mongodb://localhost:2017/books')

db.connection.on("error", function(err) {
	console.log("数据库连接失败：" + err)
})

db.connection.on("open", function() {
	console.log('数据库连接成功')
})

const BookSchema = Schema({
	title: {
		unique: true,
		type: 'String'
	},
	summary: 'String',
	price: 'Number',
	meta: {
		createAt: {
			type: Date,
			default: Date.now()
		}
	}
})

exports.Book = mongoose.model('Book', BookSchema)