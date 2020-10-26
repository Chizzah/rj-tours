/* eslint-disable */
import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";

const AboutPage = ({ data }) => {
	return (
		<Layout>
			<section>
				<div>
					<Img className="h-96" fluid={data.main.childImageSharp.fluid} />
				</div>
				<div className="flex items-center justify-center">
					<div className="w-1/3">
						<Img className="h-96" fluid={data.left.childImageSharp.fluid} />
					</div>
					<div className="w-1/3">
						<Img className="h-96" fluid={data.center.childImageSharp.fluid} />
					</div>
					<div className="w-1/3">
						<Img className="h-96" fluid={data.right.childImageSharp.fluid} />
					</div>
				</div>
			</section>
		</Layout>
	);
};

export const query = graphql`
	query {
		main: file(name: { eq: "suikerbuilt" }) {
			childImageSharp {
				fluid(maxWidth: 1440) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		left: file(name: { eq: "crech" }) {
			childImageSharp {
				fluid(maxWidth: 1440) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		center: file(name: { eq: "aurial-school" }) {
			childImageSharp {
				fluid(maxWidth: 1440) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		right: file(name: { eq: "recycling-center" }) {
			childImageSharp {
				fluid(maxWidth: 1440) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;
export default AboutPage;
