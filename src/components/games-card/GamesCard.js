import React from "react";
import "./GamesCard.scss";
import deadspace from "../../assets/images/deadspace.png";
import sims from "../../assets/images/sims.png";
import battlefield from "../../assets/images/battlefield.png";

const GamesCard = () => {
	return (
		<section className="games__card">
			<div className="game__card">
				<img src={deadspace} alt="game-poster" className="game__image" />
				<p className="game__title">Dead Space™</p>
				<p className="game__desc">
					The sci-fi survival horror classic returns, completely rebuilt from the ground
					up.
				</p>
			</div>
			<div className="game__card">
				<img src={sims} alt="game-poster" className="game__image" />
				<p className="game__title">The Sims pet lovers Bundle™ </p>
				<p className="game__desc">
					Use the powerful Create A Pet tool to customise your Sims...
				</p>
			</div>
			<div className="game__card">
				<img src={battlefield} alt="game-poster" className="game__image" />
				<p className="game__title">Battlefield 2042-BFC™</p>
				<p className="game__desc">
					Battlefield™ 2042 is a first-person shooter that marks the...
				</p>
			</div>
		</section>
	);
};

export default GamesCard;
