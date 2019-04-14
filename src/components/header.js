import React from "react";
import classnames from "classnames";
import iconChevronsDown from "../images/icon-chevrons-down.svg";
const Header = ({ isLoading }) => {
  let classes = classnames("header", { "header--loading": isLoading });
  return (
    <header className={classes}>
      <div className="wrapper">
        <h1 className="header__title">Coinquest</h1>
        <p className="header__caption">
          En text om questen lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </p>
        <a href="#quests" className="header__button">
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
};
export default Header;
