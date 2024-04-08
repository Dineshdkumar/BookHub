import React, { useEffect, useState } from "react";
import "./Books.css";
import Loader from "../Loader";
import Footer from "../Footer/Footer";
// import Footer from "./Footer";

const Books = ({ books, loading }) => {
  const [resultTitle, setResultTitle] = useState("");

  useEffect(() => {
    if (books.length >0) {
      setResultTitle("Your Search Results");
    } else {
      setResultTitle("No Results Found");
    }
    // eslint-disable-next-line 
  },[books]);

  const placeholderImage = "https://covers.openlibrary.org/b/id/11963233-M.jpg";
  return loading ? (
    <Loader />
  ) : (
    <div className="MainContainer">
      <div className="ResultTitle">
      <h2 >{resultTitle}</h2>
      </div>
      <div className="BooksContainer">
        {console.log(books)}
        {books.slice(0, 32).map((list, index) => (
          <div className="BooksContent" key={index}>
            <div className="BooksContent-img">
              <img
                src={
                  list.cover_i
                    ? `https://covers.openlibrary.org/b/id/${list.cover_i}-M.jpg`
                    : placeholderImage
                }
                alt=""
              />
            </div>
            <div className="BooksContent-info">
              <div className="BooksContent-title">
                <span>
                  <b>Title : </b>
                </span>
                <span>{list.title}</span>
              </div>
              <div className="BooksContent-author">
                <span>
                  <b>Author : </b>
                </span>
                <span>{list.author_name}</span>
              </div>
              <div className="BooksContent-year">
                <span>
                  <b>Publish Year : </b>
                </span>
                <span>{list.first_publish_year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Books;
