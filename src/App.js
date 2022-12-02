import "./App.scss";
import Header from "./components/header/Header";
import LeftSidebar from "./components/left-sidebar/LeftSidebar";
import Main from "./components/main/Main";
import CollapsibleBar from "./components/collapsible-bar/CollapsibleBar";
import { Routes, Route, Outlet } from "react-router-dom";
import OverView from "./components/overview/OverView";
import FriendsList from "./components/friends-list/FriendsList";
import RedeemModal from "./components/redeem-modal/RedeemModal";
import { useState } from "react";
import Layout from "./components/layout/Layout";

function App() {
  const [redeemModal, setredeemModal] = useState({
    isActive: false,
  });
  const [modalContent, setModalContent] = useState({
    modal1: true,
    modal2: false,
    modal3: false,
  });

  const changeModalContent = (num) => {
    switch (num) {
      case 2:
        setModalContent((modal) => ({
          modal1: false,
          modal2: true,
          modal3: false,
        }));
        break;
      case 3:
        setModalContent((modal) => ({
          modal1: false,
          modal2: false,
          modal3: true,
        }));
        break;
      default:
        setModalContent((modal) => ({
          modal1: true,
          modal2: false,
          modal3: false,
        }));
    }
  };
  const closeHandler = () => {
    setModalContent((modal) => ({
      modal1: true,
      modal2: false,
      modal3: false,
    }));
    setredeemModal((modal) => ({ ...modal.isActive, isActive: false }));
  };
  const redeemHandler = () => {
    setredeemModal((modal) => ({ ...modal.isActive, isActive: true }));
  };

  return (
    <>
      {redeemModal.isActive && (
        <RedeemModal
          modalContent={modalContent}
          changeModalContent={changeModalContent}
          closeHandler={closeHandler}
        />
      )}
      <Routes>
        <Route path="/" element={<Layout redeemHandler={redeemHandler} />} />
        <Route path="/overview" element={<OverView />} />
      </Routes>
    </>
  );
}

export default App;
