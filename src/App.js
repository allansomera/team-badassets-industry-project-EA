import "./App.scss";
<<<<<<< HEAD
import OverView from "./components/overview/OverView";

function App() {
	return (
		<div className="App">
			<OverView />
		</div>
	);
=======
import Header from "./components/header/Header";
import LeftSidebar from "./components/left-sidebar/LeftSidebar";
import Main from "./components/main/Main";
import { Routes, Route, Outlet } from "react-router-dom";

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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  );
>>>>>>> dev
}

export default App;
