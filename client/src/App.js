import React, { useState, useEffect } from "react";
import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import FormField from "./Form/FormField";
import Select from "./Form/Select";
import Section from "./Section";
import BooksTable from "./BooksTable";
import { compareObjects } from "./logic/utilities";


function App() {
  const [books, setBooks] = useState([]);

  const sortBooks = (books, key) => {
    const sortedBooks = books.sort(compareObjects(key));
    return sortedBooks;
  };


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
        <Form legendText="Nowa książka" buttonText="Dodaj książkę">
          <FormField labelText="Tytuł" placeholder="Podaj tytuł książki" />
          <FormField labelText="Autor" placeholder="Podaj autora" />
          <FormField labelText="Książka przeczytana" type="checkbox" />
          <FormField labelText="Data przeczytania" type="date" />
        </Form>
        <Section title="Twoja lista ksiażek">
          <Form legendText="Ustawienia wyświetlania">
            <FormField labelText="Książki przeczytane" type="radio" value="read" name="books" checked={true} />
            <FormField labelText="Książki do przeczytania" type="radio" value="toRead" name="books" />
            <Select labelText="Wybierz rok" years={[2001, 2004, 2005]} />
          </Form>
          <BooksTable books={books} />
        </Section>
      </Container>
    </>
  );
}

export default App;
