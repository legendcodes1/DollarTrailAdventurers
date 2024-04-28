
import { useEffect, useState } from "react";
import { initialTabs as tabs } from "./ingredients";
import { motion, AnimatePresence } from "framer-motion";
import "../Styles/summary.css";
import { Player } from "../Interfaces/Player";

export default function Summary() {
  const [selectedTab, setSelectedTab] = useState<any>(tabs[0]);

  const [curPlayer, setCurPlayer] = useState<Player | null>(null);
  const [Res, setRes] = useState<string>("");
  const loadPlayerData = () => {
    let playerJSON: string | null = localStorage.getItem("player");
    console.log(playerJSON);
    if (playerJSON) {
      let player: Player = JSON.parse(playerJSON);
      setCurPlayer(player);
    }
  };
  const changeWeek = (item: any) => {
    setSelectedTab(item);
    console.log(item.label);
    var temp = item.label;
    var num: number = parseInt(item.label[item.label.length - 1]) - 1;
    setRes(temp + num);
    console.log(num);
  };

  useEffect(() => {
    loadPlayerData();
  }, []);
  const win = curPlayer ? curPlayer.win : false;
  const balance = curPlayer ? curPlayer.balance : 0;

  return (
    <div>
      <div className="report">
        {win ? (
          <>
            <h1>Congrats! You Win.</h1>
            <h3>You Can Afford Your New Toy!</h3>
          </>
        ) : (
          <div>
            <>
              <h1>Sorry! You Lose.</h1>
              <h3>You Can't Can Afford The New Toy!</h3>
            </>
          </div>
        )}
        <h6>You Final Balance Was ${balance}</h6>
      </div>
      <br />
      <div className="window">
        <nav>
          <ul>
            {tabs.map((item) => (
              <li
                key={item.label}
                className={item === selectedTab ? "selected" : ""}
                onClick={() => changeWeek(item)}
              >
                {`${item.icon} ${item.label}`}
                {item === selectedTab ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab ? (
                <div className="summary">
                  <h2>{selectedTab.label} Summary</h2>

                  <p className="summarytext">{Res}</p>
                </div>
              ) : (
                "error"
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
