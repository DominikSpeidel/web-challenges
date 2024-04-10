import "./styles.css";

import avatar from "./img/avatar.jpg";
import logo from "./img/logo.jpg";
import Header from "./img/components./Header.js";
import Nav from "./img/components./Navigation.js";
import Link from "./img/components./Link.js";
import Image from "./img/components./Image.js";


export default function App() {
  return (
    <>
      <Header><a href="#">
        <Image src={logo} alt="logo" />
      </a>
      <Nav>
        <Link href="#home">
          Home
        </Link>
        <Link href="#about">
          About
        </Link>
        <Link href="#impressum">
          Impressum
        </Link>
        </Nav>
          <button
            type="button"
            onClick={() => console.log("I could toggle a profile!")}
            aria-label="toggle profile">
            <Image src={avatar} alt="avatar" />
          </button>
        </Header>
      <main>content goes here…</main>
    </>
  );
}

