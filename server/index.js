const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors())
const path = require('path')

if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    req.headers['x-forwarded-proto'] === 'https' ? next() : res.redirect(`https://${req.headers.host}${req.originalUrl}`);
  });
}
const dbUrl = process.env.MONGO_URL || "mongodb://localhost:27017/listaksiazek";
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
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

app.listen(process.env.PORT || 5000, () => console.log('Server Started'))