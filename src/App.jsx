import "./App.css";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";

function App() {
  // const movieNumber = 1;

  return (
    <>
      {/* {movieNumber !== 0 ? (
        <MovieCard movie={{ title: "Vishy Red", relesase_date: "2025" }} />
      ) : (
        <h2>No movies Found</h2>
      )} */}

      {/* {movieNumber === 1 && (
        <MovieCard movie={{ title: "Vishy Red", relesase_date: "2025" }} />
      )} */}

      <Home />
    </>
  );
}

export default App;
