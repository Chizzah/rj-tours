/* eslint-disable */
import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";

const AboutPage = ({ data }) => {
	return (
		<Layout>
			<section>
				<div className="max-w-3xl px-4 py-12 mx-auto">
					<h1 className="mb-4 font-semibold uppercase md:text-4xl">
						About RJ Tours
					</h1>
					<p className="mb-4">
						Roydin John Engelbrecht is responsible for every aspect of your
						experience with RJ.Tours is pleasing.He have been a guide for 7
						years and worked at a Game lodge and wildelife ranger.
					</p>

					<p className="mb-4">
						RJ.Tours was established in 2019 but it all stared wen he was just
						13 years old and saw a groep of toerst in his area.This is where the
						hunger that burned inside of him pushed him to think about starting
						his own business.RJ.Tours is located in the Oudtshoorn area and
						toerst will get a change meet the locals and interact with
						them(local creche,recycling project,local community,furture leaders)
					</p>

					<p className="mb-4">
						He is passionate about getting to share his experience and
						everything Oudtshoorn has to offer ,and am quite exicted to leave a
						footprint.His main objective in his business plan,to introuduce
						tourist to a whole new side of Oudtshoorn area,and with RJ.Tours he
						would really like to do that his slogan of his business says
						"RJ.Tours -Oudsthoorn Flo...let's Go!!! Giving tourists a chance to
						see Oudtshoorn in a whole different way,but also learn and educate
						the forthcoming generation.
					</p>

					<p className="mb-4">
						Tourust will fell safe,learn other cultures,feel part of the
						community,professional guide,punctuality.
					</p>
				</div>
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
