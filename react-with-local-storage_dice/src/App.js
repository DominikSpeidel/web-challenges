import { D6Button } from "./components/D6Button";
import { getD6Roll } from "./utils"
import History from "./components/History";
import "./styles.css";
//import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [rolls, setRolls] = useLocalStorageState("rolls", {defaultValue: []});
  
  const handleRoll = () => {
    const newRolls = [{ value: getD6Roll(), time: Date.now() }, ...rolls];
    setRolls(newRolls);
  
    // Überprüfe, ob 5 oder mehr Würfelzüge gemacht wurden
    if (newRolls.length >= 13) {
      localStorage.clear(); // Lösche den Local Storage
    }
  };
  const currentRollValue = rolls[0]?.value;

  return (
    <div className="app">
      <main className="app__main">
        <D6Button onRoll={handleRoll} value={currentRollValue} />
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}
