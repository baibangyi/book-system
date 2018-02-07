const express = require('express')
const router = express.Router()
const BookModel = require('../Models/books')

//get 首页显示全部书籍
router.get('/', (req, res) => {
	BookModel.getBooks()
	.then((books)=> {
		res.render('index', {books})
	})
})
//get 新增书籍 
router.get('/add', (req, res) => {
	res.render('add')
})
//post 新增书籍
router.post('/add', (req, res) => {
	let book = req.body
	BookModel.addBook(book)
	.then((result)=> {
		res.redirect('/')
	})
})
//get 删除书籍
router.get('/:bookId/remove', (req, res) => {
	BookModel.delBook(req.params.bookId)
	.then((result)=> {
		res.redirect('/')
	})
})
//get 编辑书籍
router.get('/:bookId/edit', (req, res) => {
	let book = req.body
	BookModel.getBook(req.params.bookId)
	.then((book)=>{
		res.render('edit', {
			book,
			bookid: req.params.bookId
		})
	})
})
//post 编辑书籍
router.post('/:bookId/edit', (req, res) => {
	let book = req.body
	BookModel.editBook(req.params.bookId, book)
	.then((result)=> {
		res.redirect('/')
	})
})

//导出
module.exports = router