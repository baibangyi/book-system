const express = require('express')
const router = express.Router()
const BookModel = require('../opretions/opretions')

router.get('/',function (req,res) {
    BookModel.getBooks().then((books)=>{
        console.log('找到书籍信息')
        res.render('index',{books})
    })
})

router.get('/add', (req,res)=> {
    res.render('add')
})

router.post('/add', (req,res)=> {
    let book=req.body;
    BookModel.addBook(book).then((result)=>{
        res.redirect('/')
        console.log('添加成功')
    })
})

router.get('/:bookId/remove',(req,res)=>{
    BookModel.delBook(req.params.bookId).then((book)=>{
        res.redirect('/')
        console.log('删除成功')
  })
})

router.get('/:bookId/edit',(req,res)=>{
    let book=req.body;
    BookModel.editBook(req.params.bookId,book)
        .then((book)=>{
            res.render('edit', {
            book,
            bookid: req.params.bookId
        })
    })
})

router.post('/:bookId/edit', (req, res) => {
    let book = req.body
    BookModel.editBook(req.params.bookId, book)
    .then((result)=>{
    res.redirect('/')
    console.log('编辑成功')
})
})

module.exports = router