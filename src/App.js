import "./App.scss";
import { Routes, Route } from "react-router-dom";
import OverView from "./components/overview/OverView";
import { useState } from "react";
import Layout from "./components/layout/Layout";
import RedeemModal from "./components/redeem-modal/RedeemModal";

function App() {
  const [redeemModal, setredeemModal] = useState({
    isActive: true,
  });
  return (
    <>
      {redeemModal.isActive && <RedeemModal />}
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/overview" element={<OverView />} />
      </Routes>
    </>
  );
}

export default App;
