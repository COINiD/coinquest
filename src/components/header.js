import React, { PureComponent } from "react";
import classnames from "classnames";
import iconChevronsDown from "../images/icon-chevrons-down.svg";
const bgFull = require("../images/header-bg.svg");
const bgPreload = require("../images/header-bg-preload-low.png");
const logo = require("../images/coinquest-logo.svg");

export default class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.backgroundImageFull = null;
    this.backgroundImagePre = null;
  }

  componentDidMount() {
    let { simple } = this.props;
    if (!simple) {
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
  }

  renderSimple = () => {
    return (
      <a href="/">
        <img
          src={logo}
          alt="CoinQuest Logo"
          title="CoinQuest by COINiD"
          className="header__logo"
        />
      </a>
    );
  };
  renderFull = () => {
    return (
      <>
        <h1 className="header__title">CoinQuest</h1>
        <p className="header__caption">
          Follow the clues, solve riddles and earn cryptocurrency. Only one can
          be first, will it be you?
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
      </>
    );
  };

  renderBackground = () => {
    return (
      <>
        <div
          className="header__bg header__bg--full"
          ref={element => (this.backgroundImageFull = element)}
        />
        <div
          className="header__bg header__bg--pre"
          ref={element => (this.backgroundImagePre = element)}
          style={{ backgroundImage: `url('${bgPreload}')` }}
        />
      </>
    );
  };
  render() {
    const { isLoading, simple } = this.props;
    let classes = classnames("header", {
      "header--loading": isLoading,
      "header--simple": simple
    });
    return (
      <header className={classes}>
        <div className="wrapper">
          {simple ? this.renderSimple() : this.renderFull()}
        </div>
        {!simple && this.renderBackground()}
      </header>
    );
  }
}
