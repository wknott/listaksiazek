import React, { useState, useEffect } from "react";
import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import FormField from "./Form/FormField";
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
          <FormField labelText="Tytuł" name="test" placeholder="Podaj tytuł książki" />
          <FormField labelText="Autor" name="test" placeholder="Podaj autora" />
          <FormField type="checkbox" labelText="Książka przeczytana" />
          <FormField type="date" labelText="Data przeczytania" />
          <FormField type="submit" labelText="Dodaj książkę" />
        </Form>
        <Section title="Twoja lista ksiażek">
          <Form legendText="Ustawienia wyświetlania">
            <FormField type="radio" labelText="Książki przeczytane" value="read" name="books" checked={true} />
            <FormField type="radio" labelText="Książki do przeczytania" value="toRead" name="books" />
            <FormField
              type="select"
              labelText="Wybierz rok"
              name="yearSelect"
              options={[2001, 2004, 2005]}
              selectedOption={2004}
            />
          </Form>
          <BooksTable books={books} />
        </Section>
      </Container>
    </>
  );
}

export default App;
