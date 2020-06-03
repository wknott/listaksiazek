require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors())
const path = require('path')

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to MongoDB'))

app.use(express.json())

const booksRouter = require('./routes/books')
app.use('/api/books', booksRouter)

const buildPath = path.join(__dirname, '../client/build');
app.use(express.static(buildPath));
app.get('/*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(5000, () => console.log('Server Started'))