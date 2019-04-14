import React from "react";
import iconChevronsDown from "../images/icon-chevrons-down.svg";
const Header = () => (
  <header className="header">
    <div className="wrapper">
      <h1 className="header__title">Coinquest</h1>
      <p className="header__caption">
        En text om questen lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <a href="#" className="header__button">
        <span>View quests</span>
        <img
          src={iconChevronsDown}
          alt="Quests"
          title="View quests"
          className="header__button__icon"
          rel="preload"
        />
      </a>
    </div>
  </header>
);
export default Header;
