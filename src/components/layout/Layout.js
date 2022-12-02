import Header from "../header/Header";
import LeftSidebar from "../left-sidebar/LeftSidebar";
import Main from "../main/Main";
import { Outlet } from "react-router-dom";
import FriendsList from "../friends-list/FriendsList";
import "./Layout.scss";

const Layout = ({ redeemHandler }) => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="container__sidebar">
          <LeftSidebar redeemHandler={redeemHandler} />
          <FriendsList />
        </div>
        <Main />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
