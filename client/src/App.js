import React, { useState, useEffect } from "react";
import "./App.css";
import Topbar from "./Components/Topbar";
import BookDialog from "./Components/BookDialog";
import BooksTable from "./Components/BooksTable";
import BooksToReadTable from "./Components/BooksToReadTable";
import YearSelect from "./Components/YearSelect";
import Container from "@material-ui/core/Container";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function App() {
  const [books, setBooks] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [value, setValue] = useState(0);
  function compareObjects(key, order = "asc") {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }
      const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === "desc" ? comparison * -1 : comparison;
    };
  }
  async function loadBooks() {
    try {
      const res = await fetch("/api/books");
      const newBooks = await res.json();
      sortBooks(newBooks, "name");
    } catch (err) {
      return err;
    }
  }
  function sortBooks(books, key) {
    const sortedBooks = books.sort(compareObjects(key));
    setBooks(sortedBooks);
  }
  useEffect(() => {
    loadBooks();
  }, []);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <div>{children}</div>}
      </div>
    );
  }
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
          <BooksTable books={books} selectedYear={selectedYear} />
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
