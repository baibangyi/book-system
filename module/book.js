var mongoose = require('mongoose')
var db = mongoose.createConnection('localhost','book')
db.on('error',console.error.bind(console,'连接错误'))
db.once('open',function() {
	console.log('数据库连接成功，请继续操作')
})

module.exports = db