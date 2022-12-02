import Header from "../header/Header";
import LeftSidebar from "../left-sidebar/LeftSidebar";
import Main from "../main/Main";
import { Outlet } from "react-router-dom";
import FriendsList from "../friends-list/FriendsList";
import "./Layout.scss";

const Layout = ({ redeemHandler }) => {
  return (
    <section className="layout">
      <div className="container">
        <Header />
        <div className="layout-body">
          <div className="layout-body__section-left">
            <LeftSidebar redeemHandler={redeemHandler} />
            <FriendsList />
          </div>
          <div className="layout-body__section-right">
            <Main />
            {/* <Outlet /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
