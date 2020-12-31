import React from "react";
import { Link } from "gatsby";

import Logo from "../../../static/logo/rj-tours-logo.png";

const Header = () => {
	const menuItems = [
		{
			id: "1",
			name: "about",
			link: "/about",
		},
		{
			id: "2",
			name: "activities",
			link: "/activities",
		},
		{
			id: "3",
			name: "pricing",
			link: "/pricing",
		},
		{
			id: "4",
			name: "contact",
			link: "/contact",
		},
	];

	return (
		<header className="text-gray-700 border-b border-gray-300 border-solid body-font ">
			<div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
				<nav className="flex items-center justify-center text-base md:flex-wrap md:justify-start lg:w-2/5 md:ml-auto">
					{menuItems.map((item) => {
						return (
							<ul key={item.id}>
								<li>
									<Link
										className="mx-2 uppercase md:mr-5 hover:text-gray-900"
										href={item.link}
									>
										{item.name}
									</Link>
								</li>
							</ul>
						);
					})}
				</nav>
				<Link
					to="/"
					className="flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-1/5 title-font lg:items-center lg:justify-center md:mb-0"
				>
					<img className="w-16" src={Logo} />
				</Link>
				<div className="inline-flex ml-5 lg:w-2/5 lg:justify-end lg:ml-0">
					<Link to="/contact">
						<button className="inline-flex items-center px-5 py-2 mt-4 text-base font-semibold text-gray-100 capitalize bg-green-300 border-0 rounded focus:outline-none hover:bg-green-400 md:mt-0">
							Book Now
						</button>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
