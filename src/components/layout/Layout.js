import Header from "../header/Header";
import LeftSidebar from "../left-sidebar/LeftSidebar";
import Main from "../main/Main";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <LeftSidebar />
        <Main />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
