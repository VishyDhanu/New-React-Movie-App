import "./App.css";
// import Favorites from "./components/Favorites";
import Favorites from "./components/Favorites";
import MovieCard from "./components/MovieCard";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  // const movieNumber = 1;

  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorites />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
