import React from "react";
import "./CollapsibleBar.scss";
import Collapsible from "react-collapsible";

const CollapsibleBar = () => {
	return (
		<Collapsible trigger="GAME LIBRARY">
			<a href=".com" className="links">
				My games
			</a>
			<a href=".com" className="links">
				Wishlist
			</a>
		</Collapsible>
	);
};

export default CollapsibleBar;
