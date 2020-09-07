import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
  },
  reducers: {
    addBook: ({ books }, { payload }) => {
      books.push(payload);
    }
  }
});

export const { addBook } = booksSlice.actions;
export const selectBooks = state => state.books;
export default booksSlice.reducer;