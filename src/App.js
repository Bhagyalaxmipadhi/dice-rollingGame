import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartGame from "./Components/Dice/StartGame";
import GamePlay from "./Components/Dice/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/start-game"
            element={
              isGameStarted ? (
                <GamePlay />
              ) : (
                <StartGame toggle={toggleGamePlay} />
              )
            }
          />
          <Route
            path="/"
            element={
              isGameStarted ? (
                <GamePlay />
              ) : (
                <StartGame toggle={toggleGamePlay} />
              )
            }
          />
        </Routes>
      </Router>
    </>
  );
}
export default App;
