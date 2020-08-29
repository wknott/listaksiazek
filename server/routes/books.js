const express = require('express')
const router = express.Router()
const Book = require('../models/book')
router.get('/', async (req, res) => {
  try {
    const books = await Book.find()
    res.json(books)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/:id', getBook, (req, res) => {
  res.send(res.book.name)
})

router.post('/', async (req, res) => {
  const book = new Book({
    name: req.body.name,
    author: req.body.author,
    dateOfRead: req.body.dateOfRead
  })
  try {
    const newBook = await book.save()
    res.status(201).json(newBook)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

router.patch('/:id', getBook, async (req, res) => {
  if (req.body.name !== null) {
    res.book.name = req.body.name
  }
  if (req.body.author !== null) {
    res.book.author = req.body.author
  }
  if (req.body.dateOfRead !== null) {
    res.book.dateOfRead = req.body.dateOfRead
  }
  try {
    const updatedBook = await res.book.save()
    res.json(updatedBook)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

router.delete('/:id', getBook, async (req, res) => {
  try {
    await res.book.removeOne()
    res.json({ message: 'Deleted book' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getBook(req, res, next) {
  let book
  try {
    book = await Book.findById(req.params.id)
    if (book === null) {
      return res.status(404).json({ message: 'Nie ma takiej książki' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.book = book
  next()
}
module.exports = router