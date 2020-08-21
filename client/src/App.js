import React, { useState, useEffect } from "react";
import Container from "./Container";
import Header from "./Header";
import Section from "./Section";
import BooksTable from "./BooksTable";
import { compareObjects } from "./logic/utilities";
import NewBookForm from "./NewBookForm";

function App() {
  const [books, setBooks] = useState([]);
  const [showRead, setShowRead] = useState(true);

  const sortBooks = (books, key) => {
    const sortedBooks = books.sort(compareObjects(key));
    return sortedBooks;
  };

  const addBook = async (newBook) => {
    try {
      const res = await fetch("api/books", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newBook)
      });
      const data = await res.json();
      setBooks((books) => [...books, newBook])
      return data;
    } catch (err) {
      return err;
    }
  }

  useEffect(() => {
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
    loadBooks();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <NewBookForm addBook={addBook} />
        <Section title="Twoja lista ksiażek">
          {/* <Form legendText="Ustawienia wyświetlania listy książek">
            <FormField
              type="radio"
              labelText="Książki przeczytane"
              value="read"
              name="books"
              checked={showRead === true}
              onChange={() => setShowRead(true)}
            />
            <FormField
              type="radio"
              labelText="Książki do przeczytania"
              value="toRead"
              name="books"
              checked={showRead === false}
              onChange={() => setShowRead(false)}
            />
            <FormField
              type="select"
              labelText="Wybierz rok"
              name="yearSelect"
              options={[2001, 2004, 2005]}
              selectedOption={2004}
            />
          </Form> */}
          <BooksTable books={showRead ? books.filter(book => book.dateOfRead) : books.filter(book => !book.dateOfRead)} />
        </Section>
      </Container>
    </>
  );
}

export default App;
