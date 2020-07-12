import React, { useState, useEffect } from "react";
import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Section from "./Section";
import BooksTable from "./BooksTable";
import YearSelect from "./Components/YearSelect";
import { compareObjects } from "./logic/utilities";


function App() {
  const [books, setBooks] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");

  const sortBooks = (books, key) => {
    const sortedBooks = books.sort(compareObjects(key));
    return sortedBooks;
  };

  async function loadBooks() {
    try {
      const res = await fetch("/api/books");
      const newBooks = await res.json();
      const sortedBooks = sortBooks(newBooks, "name");
      setBooks(sortedBooks);
    } catch (err) {
      return err;
    }
  }

  useEffect(() => {
    (async () => {
      await loadBooks();
    })();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Form />
        <Section title={"Twoja lista ksiażek"}>

          <YearSelect
            books={books}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
          />
          <BooksTable books={books} />
        </Section>
      </Container>
    </>
  );
}

export default App;
