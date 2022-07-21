import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./container/HomePage";
import DetailFilm from "./pages/DetailFilm";
import LoginPage from "./container/LoginPage";
import RegisterPage from "./container/RegisterPage";
import ProtectedComponent from "./component/ProtectedComponent";
import ListMovieAsli from "./container/ListMovieAsli";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/DetailFilm/:MovieID"
          element={
            <ProtectedComponent>
              <DetailFilm />
            </ProtectedComponent>
          }
        />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/ListMovieAsli/:MovieType" element={<ListMovieAsli />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
