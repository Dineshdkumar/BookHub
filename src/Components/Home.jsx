import React, { useEffect, useState } from "react";
import "./Home.css";
import Books from "./Books/Books";

const Home = () => {
  const [value, setInpuvalue] = useState("");
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("Dune");
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    if (search !== "") {
      getBooksData();
    } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[search])

  async function getBooksData() {
    setLoading(true)
    const data = await fetch(`https://openlibrary.org/search.json?title=${search}`);
    const booksData = await data.json();
    setBooks(booksData.docs);
    setLoading(false)
  }

  const handleChange = (e) => {
    setInpuvalue(e.target.value);
  };

  const handleBooksByBtn = (e) => {
    e.preventDefault();
    setSearch(value);
    setInpuvalue("");
  };

  return (
    <div className="Home-Content">
      <div className="Home-Container">
        <h2 id="head1">Find Book of Your Choice</h2>
        <form className="d-flex searchBar InputForm">
          <input
            className="SearchBar"
            type="search"
            value={value}
            onChange={handleChange}
            placeholder="Search Books"
            aria-label="Search"
          />
          <button
            className="btn btn-success SearchBtn"
            type="button"
            value={value}
            onClick={handleBooksByBtn}
          >
            Search
          </button>
        </form>
      </div>
      <Books books={books}  loading={loading}/>
    </div>
  );
};

export default Home;
