import React, { useState, useEffect } from "react";
import BooksTable from "./BooksTable";
import Container from "./Container";
import Header from "./Header";
import Section from "./Section";
import { compareObjects } from "../logic/utilities";
import NewBookForm from "./NewBookForm";
import SettingsForm from "./SettingsForm";

function App() {
  const [books, setBooks] = useState([]);
  const [showRead, setShowRead] = useState(true);
  const [selectedYear, setSelectedYear] = useState("Wszystkie");

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
      const newBookWithId = await res.json();
      setBooks((books) => [...books, newBookWithId])
    } catch (error) {
      console.error(error);
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

  const getFilteredBooks = () => {
    if (selectedYear === "Wszystkie" || !showRead) {
      return showRead ? books.filter(book => book.dateOfRead) : books.filter(book => !book.dateOfRead);
    }
    const filteredBooks = books.filter(book => new Date(book.dateOfRead).getFullYear() === +selectedYear);
    return showRead ? filteredBooks.filter(book => book.dateOfRead) : filteredBooks.filter(book => !book.dateOfRead);
  }

  const getYears = () => {
    const years = new Set(books.filter(book => book.dateOfRead !== undefined).map(book => new Date(book.dateOfRead).getFullYear()))
    return ["Wszystkie", ...Array.from(years).sort()]
  }

  const markBookAsRead = async (id) => {
    try {
      const changedBook = { ...books.find(book => book._id = id), dateOfRead: new Date() }
      await fetch("api/books/" + id, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(changedBook)
      });
      const filteredBooks = [...books].map(book => book._id === id ? { ...book, dateOfRead: new Date() } : book);
      setBooks(filteredBooks)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Header />
      <Container>
        <NewBookForm addBook={addBook} />
        <Section title="Twoja lista ksiażek">
          <SettingsForm
            showRead={showRead}
            setShowRead={setShowRead}
            options={getYears()}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
          />
          <BooksTable books={getFilteredBooks()} markBookAsRead={markBookAsRead} />
        </Section>
      </Container>

    </>
  );
}

export default App;
