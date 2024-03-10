const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.status(200).send('Archakorn Kajeechrekun 6304101380')
})

const books = require('./db')
app.get('/books', (req, res) => {
    res.status(200).json(books)
})

//select * from books
app.get('/books/:id', (req, res) => {
    res.status(200).json(books.find(book => book.id === req.params.id))
})

//insert into books ()
app.post('/books', (req, res) => {
    books.push(req.body)
    res.status(201).json(req.body)
})

//update 
app.put('/books/:id', (req, res) => {
    //res.send("Hello Kitty")
    const updateIndex = books.findIndex(book => book.id === req.params.id)
    res.status(200).json(Object.assign(books[updateIndex], req.body))
    
  })
  
  
//delete from * where 
app.delete('/books/:id', (req, res) => {
    const deletedIndex = books.findIndex(book => book.id === req.params.id)
    delete books[deletedIndex];
    res.json(req.body)
})

app.listen(3000, () => {
    console.log('http://localhost:3000')
})