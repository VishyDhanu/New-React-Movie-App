import React from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const movies = [
    {
      id: 1,
      title: "John Wick",
      release_data: "2020",
      url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2520view%2F&psig=AOvVaw3rt2jUayvUWUxJd2XW5xRG&ust=1762183030305000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIjousLh05ADFQAAAAAdAAAAABAE",
    },
    {
      id: 2,
      title: "Spider man",
      release_data: "2022",
      url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2520view%2F&psig=AOvVaw3rt2jUayvUWUxJd2XW5xRG&ust=1762183030305000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIjousLh05ADFQAAAAAdAAAAABAE",
    },
    {
      id: 3,
      title: "Bat Man",
      release_data: "2024",
      url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2520view%2F&psig=AOvVaw3rt2jUayvUWUxJd2XW5xRG&ust=1762183030305000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIjousLh05ADFQAAAAAdAAAAABAE",
    },
  ];

  return (
    <div className="home">
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
