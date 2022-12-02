import Header from "../header/Header";
import LeftSidebar from "../left-sidebar/LeftSidebar";
import Main from "../main/Main";
import { Outlet } from "react-router-dom";
import FriendsList from "../friends-list/FriendsList";
import "./Layout.scss";

const Layout = () => {
	return (
		<section className="layout">
			<div className="container">
				<Header />
				<div className="main">
					<div className="main__section-left">
						<LeftSidebar />
						<FriendsList />
					</div>
					<div className="main__section-right">
						<Main />
						{/* <Outlet /> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Layout;
