import "./Header.scss";
import React from "react";
import Logo from "../../assets/logos/ea-logo.png";
import Cart from "../../assets/icons/cart.png";
import Bell from "../../assets/icons/bell.png";
import Setting from "../../assets/icons/setting.png";
import Account from "../../assets/icons/account.png";
import DesktopIcons from "../../assets/icons/desktop-icons.png";
import Online from "../../assets/icons/online.png"

const Header = () => {
  return (
    <>
      <div className="header__bar">
        <img className="header__bar-icons" src={DesktopIcons}></img>
      </div>
      <header className="header">
        <div>
          <img className="header__logo-ea" src={Logo}></img>
        </div>
        <div className="header__logo-container">
        <img className="header__logo" src={Cart}></img>
        <img className="header__logo" src={Bell}></img>
        <img className="header__logo" src={Setting}></img>
        <img className="header__logo" src={Account}></img>
        <img className="header__logo-online" src={Online}></img>
      </div>
      </header>
    </>
  );
};

export default Header;
