const express = require('express');
const { addBook, getAllBooks, getBookById, updateBookById, deleteBookById } = require('../controllers/BookController')
const router = express.Router()

router.post('/addbook', addBook)
router.get('/getbooks', getAllBooks)
router.get('/getonebook/:id', getBookById)
router.delete('/deletebook/:id', deleteBookById)
router.put('/updatebook/:id', updateBookById)

module.exports = router