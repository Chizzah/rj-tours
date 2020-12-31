/* eslint-disable */
import PropTypes from "prop-types";
import React from "react";
import Footer from "./Footer";

import Header from "./Header";

const Layout = ({ children }) => {
	return (
		<>
			<div className="site">
				<Header />
				<main className="site-content">{children}</main>
				<Footer />
			</div>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
