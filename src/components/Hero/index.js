/* eslint-disable */
import React from "react";
import { Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import "../../css/hero.css";

const HeroSection = (props) => {
	return (
		<BackgroundImage className="BG-1" fluid={props.image}>
			<section className="flex flex-col items-center justify-center h-full text-gray-100 bg-gray-900 xl:items-end xl:justify-start black-overlay-1">
				<div className="mx-4 text-left md:mr-20 md:mt-20 md:max-w-md">
					<h1 className="font-semibold capitalize xl:mt-32 md:mb-4 md:text-4xl">
						{props.title}
					</h1>
					<h2 className="md:mb-8 md:text-lg">{props.subtitle}</h2>
					<Link>
						<button className="inline-flex items-center px-5 py-2 mt-4 text-xl font-semibold text-gray-100 capitalize bg-green-500 border-0 rounded focus:outline-none hover:bg-green-400 md:mt-0">
							{props.button}
						</button>
					</Link>
				</div>
			</section>
		</BackgroundImage>
	);
};

export default HeroSection;
