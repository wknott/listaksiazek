import React from 'react'
import './App.css'
import Topbar from './Components/Topbar'
import BookDialog from './Components/BookDialog'
import BookTable from './Components/BookTable'
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div>
      <Topbar/>
      <Container>
        <BookDialog/>
        <BookTable/>
      </Container>
    </div>
  );
}

export default App;
