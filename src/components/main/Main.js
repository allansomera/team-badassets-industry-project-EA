import "./Main.scss";
import GamesCard from "../games-card/GamesCard";
import arrowLeft from "../../assets/images/arrow-left.png";
import arrowRight from "../../assets/images/arrow-right.png";
import searchIcon from "../../assets/images/searchIcon.png";

const Main = () => {
	return (
		<>
			<div className="main">
				<div className="main__top-section">
					<div className="navbar">
						<div className="buttons">
							<button className="btn btn-left">
								<img src={arrowLeft} alt="arrow-left" className=" btn-icon" />
								Back
							</button>
							<button className="btn btn-right">
								<img src={arrowRight} alt="arrow-right" className=" btn-icon" />
							</button>
						</div>
						<div className="searchbar">
							<img src={searchIcon} alt="search-icon" className="searchbar__icon" />
							<input
								type="text"
								placeholder="Search game or add-ons"
								className="searchbar__input"
							/>
						</div>
					</div>
					<div className="hero__desc">
						<p className="hero__desc-title">EA Play Trial</p>
						<p className="hero__desc-text--large">Play NFS Early</p>
						<p className="hero__desc-text--small">
							Members can try Need for Speed Unbound for 10 full hours
						</p>
					</div>
					<button className="btn-join">Join EA Play</button>
				</div>
				<div className="main__bottom-section">
					<GamesCard />
				</div>
			</div>
		</>
	);
};
export default Main;
