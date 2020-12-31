/* eslint-disable */
import React from "react";

import Layout from "../components/layout";

const PricingPage = ({ data }) => {
	return (
		<Layout>
			<section className="py-24 text-gray-700 body-font">
				<div className="container px-8 mx-auto lg:px-4">
					<div className="flex flex-wrap text-center">
						<div className="px-8 py-6 mx-auto lg:px-20 lg:w-1/3 md:w-full">
							<h2 className="mb-3 text-lg font-semibold text-gray-700 lg:text-2xl title-font">
								Person
							</h2>
							<p className="mb-4 text-base leading-relaxed">
								Adult <span className="font-semibold">R550</span>
							</p>
							<p className="mb-4 text-base leading-relaxed">
								Child (7 - 12 years) <span className="font-semibold">R320</span>
							</p>
							<button className="flex items-center px-4 py-2 mx-auto mt-auto font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-green-500 hover:from-green-500 to-green-400 hover:to-green-700 hover:-translate-y-1 hover:scale-110 focus:shadow-outline focus:outline-none">
								Book Now
							</button>
						</div>
						<div className="px-8 py-6 mx-auto lg:px-20 lg:w-1/3 md:w-full">
							<h2 className="mb-3 text-lg font-semibold text-gray-700 lg:text-2xl title-font">
								Group
							</h2>
							<p className="mb-4 text-base leading-relaxed">
								Adult <span className="font-semibold">R450</span>
							</p>
							<p className="mb-4 text-base leading-relaxed">
								Child (7 - 12 years) <span className="font-semibold">R280</span>
							</p>
							<button className="flex items-center px-4 py-2 mx-auto mt-auto font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-green-500 hover:from-green-500 to-green-400 hover:to-green-700 hover:-translate-y-1 hover:scale-110 focus:shadow-outline focus:outline-none">
								Book Now
							</button>
						</div>
						<div className="px-8 py-6 mx-auto lg:px-20 lg:w-1/3 md:w-full">
							<h2 className="mb-3 text-lg font-semibold text-gray-700 lg:text-2xl title-font">
								Private Tour
							</h2>
							<p className="mb-4 text-base leading-relaxed">
								Adult <span className="font-semibold">R1150</span>
							</p>
							<p className="mb-4 text-base leading-relaxed">
								Child (7 - 12 years) <span className="font-semibold">R580</span>
							</p>
							<button className="flex items-center px-4 py-2 mx-auto mt-auto font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-green-500 hover:from-green-500 to-green-400 hover:to-green-700 hover:-translate-y-1 hover:scale-110 focus:shadow-outline focus:outline-none">
								Book Now
							</button>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default PricingPage;
