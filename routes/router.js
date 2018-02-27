const express = require('express')
const router = express.Router()
const BookModule = require('../opretions/opretions')

router.get('/', function(req.res) {
	BookModule.getBooks().then((books)=>{
		res.render('index',{books})
	})
})
router.get('/add', function(req,res) {
	res.render('add')
})
router.post('/add',function(req,res) {
	let book = req.body
	BookModule.addBook(book).then((result)=>{
		res.redirect('/')
	})
})
router.get('/:bookId/remove',function(req,res) {
	BookModule.delBook(req.param.bookId).then((book)=>{
		res.redirect('/')
	})
})
router.get('/:bookId/edit',function(req,res){
	let data = req.body
	BookModule.editBook(req.param.bookId,data).then((book) =>{
		res.render('edit',{
			book,
			bookId:req.params.bookId
		})
	})
})
router.post('/:bookId/edit',function(req,res) {
	let data = req.body
	BookModule.editBook(req.param.bookId,data).then((result)=>{
		res.redirect('/')
	})
})