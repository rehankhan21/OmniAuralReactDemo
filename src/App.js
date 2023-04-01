import "./App.css";
import OmniAural from "omniaural";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Guess from "./components/Guess";
import State from "./components/State";

OmniAural.initGlobalState({
  message: "Guess a number between 1 and 100",
});

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Guess />} />
          <Route path="/guess" element={<Guess />} />
          <Route path="/State" element={<State />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
