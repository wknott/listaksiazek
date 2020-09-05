import React, { useState, useEffect } from "react";
import BooksTable from "./BooksTable";
import Container from "./Container";
import Header from "./Header";
import { compareObjects } from "../logic/utilities";
import NewBookForm from "./NewBookForm";
import SettingsForm from "./SettingsForm";

function App() {
  const [books, setBooks] = useState([]);
  const [showRead, setShowRead] = useState(true);
  const [selectedYear, setSelectedYear] = useState("Wszystkie");
  const [query, setQuery] = useState('');
  const [searchedBooks, setSearchedBooks] = useState([]);
  const sortBooks = (books, key, direction = "asc") => {
    const sortedBooks = books.sort(compareObjects(key, direction));
    setBooks(sortedBooks);
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
        sortBooks(newBooks, "dateOfRead", "desc");
      } catch (err) {
        return err;
      }
    }
    loadBooks();
  }, []);

  const getFilteredBooks = () => {
    if (selectedYear === "Wszystkie" || !showRead) {
      return showRead ? searchedBooks.filter(book => book.dateOfRead) : books.filter(book => !book.dateOfRead);
    }
    const filteredBooks = searchedBooks.filter(book => new Date(book.dateOfRead).getFullYear() === +selectedYear);
    return showRead ? filteredBooks.filter(book => book.dateOfRead) : filteredBooks.filter(book => !book.dateOfRead);
  }

  const getYears = () => {
    const years = new Set(books.filter(book => book.dateOfRead !== undefined).map(book => new Date(book.dateOfRead).getFullYear()))
    return ["Wszystkie", ...Array.from(years).sort()]
  }

  const markBookAsRead = async (_id) => {
    try {
      const { name, author, dateOfRead } = { ...books.find(book => book._id === _id), dateOfRead: new Date() }
      const res = await fetch("api/books/" + _id, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
          name: name,
          author: author,
          dateOfRead: dateOfRead
        })
      });
      const modifiedBook = await res.json();
      setBooks(books => books.map(book => book._id === _id ? modifiedBook : book));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (query && query.length > 0) {
      setSearchedBooks(books.filter(book => !book.name.indexOf(query) || !book.author.indexOf(query)));
    } else {
      setSearchedBooks(books);
    }
  }, [query, books])

  useEffect(() => {
    setSearchedBooks(books);
  }, [books])
  return (
    <>
      <Header />
      <Container>
        <NewBookForm addBook={addBook} />
        <SettingsForm
          showRead={showRead}
          setShowRead={setShowRead}
          options={getYears()}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          query={query}
          setQuery={setQuery}
        />
        <BooksTable books={getFilteredBooks()} markBookAsRead={markBookAsRead} sortBooks={sortBooks} />
      </Container>
    </>
  );
}

export default App;
