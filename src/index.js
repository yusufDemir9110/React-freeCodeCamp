import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { books } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => (
        <Book key={book.id} {...book} /> //we can say book={book}
      ))}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));

// same way for jsx
// const Greeting = () => {
//   return React.createElement("div", {}, React.createElement("h1", {}, "hello"));
// };
