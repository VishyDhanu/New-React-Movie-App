import React from "react";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);


  useEffect(()=>{
    const loadPopularMovies = async () =>{
      try{
        const popularMovies = await getPopularMovies()
      }
    }
  },[]);

  const handleSearch = () => {
    alert(searchQuery);
  };

  return (
    <div className="home container">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search movie here..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
};

export default Home;
