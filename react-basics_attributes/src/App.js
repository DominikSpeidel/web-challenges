import React from "react";
import "./styles.css";

export default function App() {
  return <CreateArticle></CreateArticle>
  
}

function CreateArticle() {
  return (<article className="article">
  <h2 className="article__title">Replace me with an article</h2>
  <label htmlFor="InputId">Hier ist ein Input-Element</label>
    <input id="InputId"></input>
  <a className="article__link" href="https://de.wikipedia.org/wiki/Werner_Mezger">Zum Wikipedia-Artikel über Prof. Dr. Werner Mezger</a>
    </article>);
}
