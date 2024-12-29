import React from "react";
import BookList from "../components/BookList";
import books from "../data/books";
import '../styles/Home.css';
const Home = () => {

  return (
    <div className="home">
      <h1 className="home__header">BIENVENIDOS A NUESTRA TIENDA</h1>
      <p className="home__subheader">Explora nuestra colección de libros más vendidos.</p>
      <BookList books={books} />
    </div>
  );
};

export default Home;