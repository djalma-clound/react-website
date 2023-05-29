import React, { useState, useEffect } from "react";
import "../Components/header.css";
import logo from "./logo.svg";
import Links from "../Components/links";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 950) {
      setIsOpen(true);
    }
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <img src={logo} className="App-logo" alt="logo" />
      <span id="bars" onClick={handleClick}></span>
      {isOpen && (
        <ul className="menu">
          <a className="App-link" href="/" target="">
            First item
          </a>
          <a
            className="App-link"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            second item
          </a>
          <a
            className="App-link"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            third item
          </a>
          <a
            className="App-link"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            my site
          </a>
        
        </ul>
       
      )}
      <Links/>
    </div>
  );
}

export default Header;
