import React from "react";
import "./OverView.scss";

const OverView = () => {
	return (
		<section className="overview">
			<div className="overview-left">
				<p>Overview</p>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates sint
					delectus tenetur. Nihil atque corporis ipsam numquam cupiditate culpa deleniti
					quisquam eveniet vero quis, itaque, libero animi est distinctio et aut quam
					reiciendis facilis laudantium, ut pariatur quia. Beatae consectetur consequatur
					accusamus, repudiandae vitae cum nam maiores reiciendis quas? Eligendi sed
					mollitia itaque, dolor tempore hic at ullam quis nesciunt praesentium culpa iste
					eos ducimus nemo esse obcaecati rerum laudantium aut soluta cum officiis. Fuga
					soluta minima impedit ad molestias hic quod id exercitationem unde tempora iure
					blanditiis officiis, quibusdam, dolorem quam rerum, error quis tempore
					voluptatibus. Reiciendis itaque explicabo nulla iusto distinctio soluta beatae
					obcaecati non necessitatibus eaque quaerat sint quia mollitia inventore possimus
					laudantium ut provident facilis nemo aperiam, aut vel. Itaque sapiente eligendi,
					optio dolorem dicta incidunt omnis atque porro, minima, sint iure laborum iste
					deleniti consequatur voluptates. Minima, placeat? Aperiam fuga culpa numquam.
					Molestias fugit neque sunt tempora, animi eum illo libero ab et sed consequatur
					facilis odit sit ducimus voluptates delectus asperiores eos? Facilis,
					doloremque. Sit officia ipsa possimus odit? Laborum deleniti, alias corporis
					reprehenderit ullam dolores odio eveniet odit ea modi. Perspiciatis temporibus
					repudiandae autem quos, veritatis illo nesciunt consequuntur. Minima optio nam
					veniam.
				</p>
			</div>
			<div className="overview-right">
				<div className="overview__row">
					<p className="overview-label">Genre</p>
					<button>Simulation</button>
				</div>
				<div className="overview__row">
					<p className="overview-label">Publisher</p>
					<p className="overview-text">Electronic Arts</p>
				</div>
				<div className="overview__row">
					<p className="overview-label">Developer</p>
					<p className="overview-text">Maxis</p>
				</div>
				<div className="overview__row">
					<p className="overview-label">Languages</p>
					<p className="overview-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quibusdam
						dolores optio vero architecto, et velit quos molestiae eos nisi? Fugiat
						voluptates vero ab libero, in eligendi maiores mollitia quas.
					</p>
				</div>
				<div className="overview__row">
					<p className="overview-label">Release date</p>
					<p className="overview-text">2014-09-05</p>
				</div>
				<div className="overview__row-bottom">
					<p className="overview-label">System requirements</p>
					<a href="ea.com" className="overview-link">
						view
					</a>
				</div>
			</div>
		</section>
	);
};

export default OverView;
