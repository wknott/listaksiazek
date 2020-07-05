import React, { useState, useEffect } from "react";
import "./App.css";
import Topbar from "./Components/Topbar";
import BookDialog from "./Components/BookDialog";
import BooksTable from "./Components/BooksTable";
import BooksToReadTable from "./Components/BooksToReadTable";
import YearSelect from "./Components/YearSelect";
import TabPanel from "./Components/TabPanel";
import Container from "@material-ui/core/Container";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { compareObjects } from "../src/utilities";
function App() {
  const [books, setBooks] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [value, setValue] = useState(0);

  async function loadBooks() {
    try {
      const res = await fetch("/api/books");
      const newBooks = await res.json();
      sortBooks(newBooks, "name");
    } catch (err) {
      return err;
    }
  }
  const sortBooks = (books, key) => {
    const sortedBooks = books.sort(compareObjects(key));
    setBooks(sortedBooks);
  };
  useEffect(() => {
    loadBooks();
  }, []);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Topbar />
      <Container>
        <br />
        <BookDialog loadBooks={loadBooks} />

        <Tabs value={value} onChange={handleChange}>
          <Tab label="Książki przeczytane" />
          <Tab label="Książki do przeczytania" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <h2>Przeczytane książki</h2>
          <YearSelect
            books={books}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
          />
          <BooksTable
            books={books}
            selectedYear={selectedYear}
            sortBooks={sortBooks}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <h2>Książki do przeczytania</h2>
          <BooksToReadTable books={books} loadBooks={loadBooks} />
        </TabPanel>
      </Container>
    </div>
  );
}

export default App;
