import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle () {
  return (
  <article>
    <h1>Hier ist H1</h1>
    <p>Hier ist das p</p>
  </article>)
}