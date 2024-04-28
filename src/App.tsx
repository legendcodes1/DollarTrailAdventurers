import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import StartModal from "./Components/StartModal";
import ActionModal from "./Components/ActionModal";
import { GameEvent } from "./Interfaces/GameEvent";
import { Player } from "./Interfaces/Player";
import Home from "./Components/Home";
import EventGenerator from "./Utils/EventGenerator";
import BeginModal from "./Components/BeginModal";
import PassiveModal from "./Components/PassiveModal";
import { EventChoice } from "./Utils/EventChoice";
function App() {
  const [startModalOpen, setStartModalOpen] = useState(true);
  const [actionModalOpen, setActionModalOpen] = useState(false);
  const [passiveModalOpen, setPassiveModalOpen] = useState(false);
  const [tutorialModalOpen, setTutorialModalOpen] = useState(false);
  const [hideCounter, setHideCounter] = useState(true);
  const [dayCounter, setDayCounter] = useState(1);

  const [curEvent, setCurEvent] = useState<GameEvent | null>(null);

  const handleChoice = (accepted: boolean) => {
    curEvent!.accepted = accepted;
    console.log(curEvent);

    let playerJSON: string | null = localStorage.getItem("player");

    if (playerJSON) {
      let player: Player = JSON.parse(playerJSON);
      EventChoice(curEvent!, player);
      console.log(player);
    }
  };

  const handleCloseStartModal = () => {
    setStartModalOpen(false);

    setTutorialModalOpen(true);
  };
  const handleClosePassiveModal = () => {
    setPassiveModalOpen(false);
    handleChoice(true);
  };
  const handleCloseActionModal = (accepted: boolean) => {
    setActionModalOpen(false);
    handleChoice(accepted);
  };
  const initializePlayer = () => {
    let player: Player = {
      balance: 0,
      completedEvents: [],
      recurringCharges: 0,
      nextCharge: 0,
    };

    localStorage.setItem("player", JSON.stringify(player));
  };
  const startGame = () => {
    setHideCounter(false);
    setTutorialModalOpen(false);
    initializePlayer();
  };
  const endGame = () => {
    setDayCounter(1);

    let playerJSON: string | null = localStorage.getItem("player");

    if (playerJSON) {
      let player: Player = JSON.parse(playerJSON);
      if (player.balance > 50) {
        console.log("Win");
      } else {
        console.log("Lose");
      }
    }
    localStorage.removeItem("player");
    setStartModalOpen(true);
  };
  const determineNextModal = (nxtEvent: GameEvent) => {
    if (nxtEvent.active == false) {
      setPassiveModalOpen(true);
    } else {
      setActionModalOpen(true);
    }
  };
  const changeTurn = () => {
    if (dayCounter == 4) {
      endGame();
      return;
    }
    incrementCount();
    var nxtEvent: GameEvent | null = EventGenerator();
    setCurEvent(nxtEvent);
    determineNextModal(nxtEvent!);
  };
  const incrementCount = () => {
    setDayCounter(dayCounter + 1);
  };
  return (
    <div className="App">
      {!hideCounter && <div className="day">Day {dayCounter}</div>}
      {}
      {startModalOpen && (
        <StartModal
          show={startModalOpen}
          handleCloseStartModal={handleCloseStartModal}
        />
      )}
      {tutorialModalOpen && (
        <BeginModal show={tutorialModalOpen} startGame={startGame} />
      )}
      {}
      {actionModalOpen && (
        <ActionModal
          description={curEvent!.description}
          image={curEvent!.image}
          show={actionModalOpen}
          handleClose={handleCloseActionModal}
        />
      )}
      {passiveModalOpen && (
        <PassiveModal
          description={curEvent!.description}
          image={curEvent!.image}
          show={passiveModalOpen}
          handleClose={handleClosePassiveModal}
        />
      )}
      {!tutorialModalOpen &&
        !actionModalOpen &&
        !passiveModalOpen &&
        !startModalOpen && <Home changeTurn={changeTurn} />}
    </div>
  );
}

export default App;
