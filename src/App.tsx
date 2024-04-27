import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import StartModal from "./Components/StartModal";
import ActionModal from "./Components/ActionModal";
import Home from "./Components/Home";
function App() {
  const [startModalOpen, setStartModalOpen] = useState(true);
  const [actionModalOpen, setActionModalOpen] = useState(false);
  const [hideCounter, setHideCounter] = useState(true);
  const [dayCounter, setDayCounter] = useState(0);
  const handleCloseStartModal = () => {
    setStartModalOpen(false);
  };

  const handleCloseActionModal = () => {
    setActionModalOpen(false);
  };

  const startGame = () => {
    handleCloseStartModal();
    setHideCounter(false);
    setActionModalOpen(true);
    changeTurn();
  };
  const changeTurn = () => {
    incrementCount();
  };
  const incrementCount = () => {
    setDayCounter(dayCounter + 1);
  };
  return (
    <div className="App">
      {!hideCounter && <div className="day">Day {dayCounter}</div>}
      {/* Render StartModal only if startModalOpen is true */}
      {startModalOpen && (
        <StartModal show={startModalOpen} startGame={startGame} />
      )}

      {/* Render ActionModal only if actionModalOpen is true */}
      {actionModalOpen && (
        <ActionModal
          show={actionModalOpen}
          handleClose={handleCloseActionModal}
        />
      )}
   {!actionModalOpen && !startModalOpen && (
      <Home/>
    )}

    </div>
  );
}

export default App;
