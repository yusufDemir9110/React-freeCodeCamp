import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  const price = "85 euro";
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
      <h3>{price}</h3>
    </article>
  );
};
const Image = () => {
  return (
    <img
      src="https://m.media-amazon.com/images/I/51WmZ6UZYdL._SY346_.jpg"
      alt=""
    />
  );
};
const Title = () => {
  return <h1>Book title</h1>;
};
const Author = () => {
  return <h4 style={{ color: "#617d98" }}>author</h4>;
};

ReactDom.render(<BookList />, document.getElementById("root"));

// same way
// const Greeting = () => {
//   return React.createElement("div", {}, React.createElement("h1", {}, "hello"));
// };
