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
        <img className="header__bar-icons" src={DesktopIcons} alt="desktop icons"></img>
      </div>
      <header className="header">
        <div>
          <img className="header__logo-ea" src={Logo} alt="EA logo"></img>
        </div>
        <div className="header__logo-container">
          <img className="header__logo" src={Cart} alt="shopping cart icon"></img>
          <img className="header__logo" src={Bell} alt="bell icon"></img>
          <img className="header__logo" src={Setting} alt="setting icon"></img>
          <img className="header__logo" src={Account} alt="account icon"></img>
          <img className="header__logo-online" src={Online} alt="online icon"></img>
        </div>
      </header>
    </>
  );
};

export default Header;
