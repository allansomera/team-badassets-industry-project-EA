import "./App.scss";
import Header from "./components/header/Header";
import LeftSidebar from "./components/left-sidebar/LeftSidebar";
import Main from "./components/main/Main";
import CollapsibleBar from "./components/collapsible-bar/CollapsibleBar";
import { Routes, Route, Outlet } from "react-router-dom";
import OverView from "./components/overview/OverView";

const Layout = () => {
	return (
		<>
			<Header />
			<div className="container">
				<div className="left-side">
					<LeftSidebar />
					<CollapsibleBar />
				</div>
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
				<Route path="/overview" element={<OverView />} />
			</Routes>
		</>
	);
}

export default App;
