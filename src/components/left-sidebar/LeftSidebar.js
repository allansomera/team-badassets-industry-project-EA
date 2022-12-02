import "./LeftSidebar.scss";

const LeftSidebar = () => {
	return (
		<>
			<div className="leftsidebar">
				<ul className="leftsidebar__sidenav">
					<li className="leftsidebar__item">Home</li>
					<li className="leftsidebar__item">Browse</li>
					<li className="leftsidebar__item">My Collection</li>
				</ul>
			</div>
		</>
	);
};

export default LeftSidebar;
