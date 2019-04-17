import React, { PureComponent } from "react";
import classnames from "classnames";
import iconChevronsDown from "../images/icon-chevrons-down.svg";
const bgFull = require("../images/header-bg.svg");
const bgPreload = require("../images/header-bg-preload.png");

export default class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.backgroundImageFull = null;
    this.backgroundImagePre = null;
  }

  componentDidMount() {
    const hdLoaderImg = new Image();
    hdLoaderImg.src = bgFull;
    hdLoaderImg.onload = () => {
      this.backgroundImageFull.setAttribute(
        "style",
        `background-image: url('${bgFull}')`
      );
      this.backgroundImageFull.classList.add("header__bg--fade-in");
    };
  }

  render() {
    const { isLoading } = this.props;
    let classes = classnames("header", { "header--loading": isLoading });
    return (
      <header className={classes}>
        <div className="wrapper">
          <h1 className="header__title">Coinquest</h1>
          <p className="header__caption">
            En text om questen lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
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
        <div
          className="header__bg header__bg--full"
          ref={element => (this.backgroundImageFull = element)}
        />
        <div
          className="header__bg header__bg--pre"
          ref={element => (this.backgroundImagePre = element)}
          style={{ backgroundImage: `url('${bgPreload}')` }}
        />
      </header>
    );
  }
}
