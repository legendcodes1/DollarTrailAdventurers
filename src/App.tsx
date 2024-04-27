import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import StartModal from "./Components/StartModal";
import ActionModal from "./Components/ActionModal";
import React, { useState } from "react";

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

  return (
    <div className="App">
      {/* Render StartModal only if startModalOpen is true */}
      {startModalOpen && (
        <StartModal show={startModalOpen} handleClose={handleCloseStartModal} />
      )}

      {/* Render ActionModal only if actionModalOpen is true */}
      {actionModalOpen && (
        <ActionModal show={actionModalOpen} handleClose={handleCloseActionModal} />
      )}
    </div>
  );
}

export default App;
