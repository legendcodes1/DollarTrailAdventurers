import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import StartModal from "./Components/StartModal";
import ActionModal from "./Components/ActionModal";
import { GameEvent } from "./Interfaces/GameEvent";
import Home from "./Components/Home";
import EventGenerator from "./Utils/EventGenerator";
function App() {
  const [startModalOpen, setStartModalOpen] = useState(true);
  const [actionModalOpen, setActionModalOpen] = useState(false);
  const [hideCounter, setHideCounter] = useState(true);
  const [dayCounter, setDayCounter] = useState(0);

  const [curEvent, setCurEvent] = useState<GameEvent | null>(null);

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
    setCurEvent(EventGenerator());
    setActionModalOpen(true);
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
          description={curEvent!.description}
          image={curEvent!.image}
          show={actionModalOpen}
          handleClose={handleCloseActionModal}
        />
      )}
      {!actionModalOpen && !startModalOpen && <Home changeTurn={changeTurn} />}
    </div>
  );
}

export default App;
