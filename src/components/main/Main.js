import "./Main.scss";
import GamesCard from "../games-card/GamesCard";

const Main = () => {
	return (
		<>
			<div className="main">
				<div className="main__top-section">
					<div className="navbar">
						<button></button>
					</div>
				</div>
				<div className="main__bottom-section">
					<GamesCard />
				</div>
			</div>
		</>
	);
};
export default Main;
