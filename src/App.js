import "./App.css";

// routing
import { Routes, Route } from "react-router-dom";

// import react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// pages
import HomePage from "./pages/Home.page";
import MoviePage from "./pages/Movie.page";
import PlayPage from "./pages/Play.page";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/plays" element={<PlayPage />} />
    </Routes>
  );
}

export default App;