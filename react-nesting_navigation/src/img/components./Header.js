export default function Header ({children}) {
  return (
  <header className="header">{children}
  </header>
  )
}

//import avatar from "../../img/avatar.jpg";
//import logo from "../../img/logo.jpg";

/*export default function Header () {
    return (
    <header className="header">
      <a href="#">
        <img className="round-image" src={logo} alt="logo" />
      </a>
      <nav>
        <a className="navigation__link" href="#home">
          Home
        </a>
        <a className="navigation__link" href="#about">
          About
        </a>
        <a className="navigation__link" href="#impressum">
          Impressum
        </a>
        </nav>
          <button
            type="button"
            onClick={() => console.log("I could toggle a profile!")}
            aria-label="toggle profile"
          >
            <img className="round-image" src={avatar} alt="avatar" />
          </button>
        </header>
    )
  }
  */
  