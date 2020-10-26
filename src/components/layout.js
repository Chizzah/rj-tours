/* eslint-disable */
import PropTypes from "prop-types";
import React from "react";
import Footer from "./Footer";

import Header from "./Header";

const Layout = ({ children }) => {
	return (
		<div classNameName="flex flex-col min-h-screen font-sans text-gray-900">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
