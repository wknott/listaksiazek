import React, {useState, useEffect} from 'react'
import './App.css'
import Topbar from './Components/Topbar'
import BookDialog from './Components/BookDialog'
import BookTable from './Components/BookTable'
import YearSelect from './Components/YearSelect'
import Container from '@material-ui/core/Container';
function App() {
  const [books, setBooks] = useState([])
  const [selectedYear, setSelectedYear] = useState('')
  async function loadBooks(){
    try {
      const res = await fetch('/api/books')
      const newBooks = await res.json()
      setBooks(newBooks)
    } catch (err) {
      return err
    }
  }
  useEffect(() => {
    loadBooks()
  },[])
  return (
    <div>
      <Topbar/>
      <Container>
        <BookDialog/>
        <h2>Przeczytane książki</h2>
        <YearSelect books={books} selectedYear={selectedYear} setSelectedYear={setSelectedYear}/>
        <BookTable books={books} selectedYear={selectedYear}/>
        <h2>Książki do przeczytania</h2>
      </Container>
    </div>
  );
}

export default App;
