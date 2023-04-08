import '../Components/header.css';
import logo from "./logo.svg";

function Header() {
  return (
    <div className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
        <a
          className="App-link"
          href="https://dj-techs.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          my site
        </a>

    </div>
  );
}

export default Header;