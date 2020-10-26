/* eslint-disable */
import React from "react";

import Logo from "../../../static/logo/rj-tours-logo.png";

const Footer = () => {
	return (
		<footer className="text-gray-900 border-t border-gray-300 border-solid body-font">
			<div className="bg-white">
				<div className="container flex flex-col items-center px-5 py-6 mx-auto sm:flex-row">
					<a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
						<img className="w-16" src={Logo} />
					</a>
					<p className="mt-4 text-sm text-gray-500 sm:ml-6 sm:mt-0">
						<a
							href="https://twitter.com/knyttneve"
							rel="noopener noreferrer"
							className="ml-1 text-gray-600"
							target="_blank"
						>
							Copyright © RJ Tours 2020 | All rights reserved.
						</a>
					</p>
					<span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
						<a className="text-gray-500">
							<svg
								fill="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								class="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
							</svg>
						</a>
						<a className="ml-3 text-gray-500">
							<svg
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								class="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
								<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
							</svg>
						</a>
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;