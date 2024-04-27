import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import StartModal from "./Components/StartModal";
import ActionModal from "./Components/ActionModal";

function App() {
  const [startModalOpen, setStartModalOpen] = useState(true);
  const [actionModalOpen, setActionModalOpen] = useState(false);

  const handleCloseStartModal = () => {
    setStartModalOpen(false);
    setActionModalOpen(true);
  };

  const handleCloseActionModal = () => {
    setActionModalOpen(false);
  };
  const [dayCounter, setDayCounter] = useState(0);

  const incrementCount = () => {
    setDayCounter(dayCounter + 1);
  };
  return (
    <div className="App">
      <div className="day">Day {dayCounter}</div>
      {/* Render StartModal only if startModalOpen is true */}
      {startModalOpen && (
        <StartModal show={startModalOpen} handleClose={handleCloseStartModal} />
      )}

      {/* Render ActionModal only if actionModalOpen is true */}
      {actionModalOpen && (
        <ActionModal
          show={actionModalOpen}
          handleClose={handleCloseActionModal}
        />
      )}
    </div>
  );
}

export default App;
