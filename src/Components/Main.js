import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";
const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);

  const searchBook = (e) => {
    if (e.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyCb0kD-dirkxsGwe0WRoDGB8-7vcOSjbkk&maxResults=40"
        )
        .then((res) => setBookData(res.data.items))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            Read. <br /> For, that's all we are.
          </h1>
        </div>
        <div className="row2">
          <h2>Find your poison.</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter book name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <button>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <img src="./Images/bg2.png" alt="" />
        </div>
      </div>

      <div className="container">
        <Card book={bookData} />
      </div>
    </>
  );
};

export default Main;
