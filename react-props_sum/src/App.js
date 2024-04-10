import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA = {23} valueB={3}/>;
}

function Sum({valueA, valueB}) {
  return <h2>{` ${valueA} + ${valueB} = ${valueA + valueB}`}</h2>
  
}
