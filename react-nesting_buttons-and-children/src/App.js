import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Borussia Dortmund</Button>
      <Button>SV Schemmerhofen</Button>
      <Button>St. Pauli</Button>
      <Button>1860 München</Button>
    </main>
  );
}

function Button({children}) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
