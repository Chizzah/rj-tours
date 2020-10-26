/* eslint-disable */
import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import HeroSection from "../components/Hero";

import testimonialOne from "../../static/testimonial-1.jpg";
import testimonialTwo from "../../static/testimonial-2.jpg";

const IndexPage = ({ data }) => {
	return (
		<Layout>
			<HeroSection
				image={data.test.childImageSharp.fluid}
				title="Oudtshoorn Township Footprint Tour"
				subtitle="A local socially responsible Footprint Tour, providing guests the opportunity to meet and interact with the local community from an inspirational footprint tour."
				button="Learn More"
			/>
			<section className="py-24 text-center bg-gray-100">
				<div className="md:mx-auto md:max-w-4xl">
					<div className="md:mt-8 md:mb-8">
						<h2 className="mb-8 font-semibold text-green-400 uppercase md:mb-16 md:text-2xl">
							Enrich the experience
						</h2>
						<p className="mx-4 mb-4 md:mb-8">
							RJ Tours, the operational sole trader located in the heart of the
							Klein Karoo. A local socially responsible Footprint Tour,
							providing guests the opportunity to meet and interact with the
							local community from an inspirational footprint tour.
						</p>

						<p className="mx-4">
							Along with the local qualified guide escorting guests in and
							around the township, sharing and experiencing interesting places.
							Focal points on interacting with young future leaders, introducing
							the importance of reprocessing raw material and facilitate the
							hidden treasures of our local developing areas.
						</p>
					</div>
				</div>
			</section>
			<section className="text-gray-700 body-font">
				<div className="container px-5 py-24 mx-auto">
					<h2 className="mb-8 font-semibold text-center text-blue-400 uppercase md:mb-16 md:text-2xl">
						Highlights of the tour
					</h2>
					<div className="flex flex-col items-center pb-10 mx-auto mb-10 border-b border-gray-200 lg:w-3/5 sm:flex-row">
						<div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 overflow-hidden text-indigo-500 bg-indigo-100 rounded-full sm:w-32 sm:h-32 sm:mr-10">
							<Img
								className="w-full h-full overflow-hidden"
								fluid={data.crech.childImageSharp.fluid}
							/>
						</div>
						<div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
							<h2 className="mb-2 text-lg font-medium text-gray-900 title-font">
								With your input Nomonde Crèche can accelerate (week days only)
							</h2>
							<p className="text-base leading-relaxed">
								Patience for our future leaders is all where the phrase
								“Nomonde” comes from. Back in 1994, the crèche came to existence
								and is still up in running laying the foundation of successful
								leaders of tomorrow. Conservation is implemented as a
								curriculum, reprocessing raw material working hand-in-hand with
								creating a better lifestyle and introducing change to the world.
							</p>
							<a className="inline-flex items-center mt-3 text-blue-400">
								Learn More
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-4 h-4 ml-2"
									viewBox="0 0 24 24"
								>
									<path d="M5 12h14M12 5l7 7-7 7"></path>
								</svg>
							</a>
						</div>
					</div>
					<div className="flex flex-col items-center pb-10 mx-auto mb-10 border-b border-gray-200 lg:w-3/5 sm:flex-row">
						<div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
							<h2 className="mb-2 text-lg font-medium text-gray-900 title-font">
								Discover Suikerbult ‘Ghetto’ Community
							</h2>
							<p className="text-base leading-relaxed">
								A historic, little populated and developing area. A breathtaking
								life style and people with strong belief as in what they feel
								belongs to them. Informal settlement in which they believe is
								where they are enrooted by their grandparents and forefathers.
								An astounding experience you don’t want to miss, where
								generations clings to the fact that storms may come but that is
								where they belong.
							</p>
							<a className="inline-flex items-center mt-3 text-blue-400">
								Learn More
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-4 h-4 ml-2"
									viewBox="0 0 24 24"
								>
									<path d="M5 12h14M12 5l7 7-7 7"></path>
								</svg>
							</a>
						</div>
						<div className="inline-flex items-center justify-center flex-shrink-0 order-first w-20 h-20 overflow-hidden text-indigo-500 bg-indigo-100 rounded-full sm:w-32 sm:order-none sm:h-32 sm:ml-10">
							<Img
								className="w-full h-full overflow-hidden"
								fluid={data.suikerbuilt.childImageSharp.fluid}
							/>
						</div>
					</div>
					<div className="flex flex-col items-center pb-10 mx-auto mb-10 border-b border-gray-200 lg:w-3/5 sm:flex-row">
						<div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 overflow-hidden text-indigo-500 bg-indigo-100 rounded-full sm:w-32 sm:h-32 sm:mr-10">
							<Img
								className="w-full h-full overflow-hidden"
								fluid={data.highschool.childImageSharp.fluid}
							/>
						</div>
						<div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
							<h2 className="mb-2 text-lg font-medium text-gray-900 title-font">
								Our Impressive Aurial College (Week Days Only)
							</h2>
							<p className="text-base leading-relaxed">
								An opportunity to interact with our high school -leveled
								scholars, as to an aim for them to explore what more the world
								has to offer. We will set a platform for them to step on and be
								able to spread their wings abroad. Together we can feel free and
								enjoy our locally prepared refreshments.
							</p>
							<a className="inline-flex items-center mt-3 text-blue-400">
								Learn More
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-4 h-4 ml-2"
									viewBox="0 0 24 24"
								>
									<path d="M5 12h14M12 5l7 7-7 7"></path>
								</svg>
							</a>
						</div>
					</div>
					<div className="flex flex-col items-center mx-auto lg:w-3/5 sm:flex-row">
						<div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
							<h2 className="mb-2 text-lg font-medium text-gray-900 title-font">
								Let’s Extract, Refine And Reprocess To Make A Better Living For
								All!
							</h2>
							<p className="text-base leading-relaxed">
								A life time story on how passion for constructing raw material
								came into action. Taking it back from 1986, through to 1994 were
								the company came into existence and how it all changes lives in
								our current decade. Plastic is the main product, but instilling
								the importance of its value in our society/community.
							</p>
							<a className="inline-flex items-center mt-3 text-blue-400">
								Learn More
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-4 h-4 ml-2"
									viewBox="0 0 24 24"
								>
									<path d="M5 12h14M12 5l7 7-7 7"></path>
								</svg>
							</a>
						</div>
						<div className="inline-flex items-center justify-center flex-shrink-0 order-first w-20 h-20 overflow-hidden text-indigo-500 bg-indigo-100 rounded-full sm:w-32 sm:order-none sm:h-32 sm:ml-10">
							<Img
								className="w-full h-full overflow-hidden"
								fluid={data.recycle.childImageSharp.fluid}
							/>
						</div>
					</div>
					<button className="flex px-8 py-2 mx-auto mt-20 text-lg text-white bg-blue-400 border-0 rounded focus:outline-none hover:bg-blue-300">
						Book Now
					</button>
				</div>
			</section>
			<section className="text-gray-700 bg-gray-100 body-font">
				<div className="container px-5 py-24 mx-auto">
					<h2 className="mb-8 font-semibold text-center text-green-400 uppercase md:mb-16 md:text-2xl">
						Testimonials
					</h2>
					<div className="flex flex-wrap -m-4">
						<div className="w-full p-4 md:w-1/2">
							<div className="h-full p-8 bg-gray-200 rounded">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									className="block w-5 h-5 mb-4 text-gray-400"
									viewBox="0 0 975.036 975.036"
								>
									<path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
								</svg>
								<p className="mb-6 leading-relaxed">
									Synth chartreuse iPhone lomo cray raw denim brunch everyday
									carry neutra before they sold out fixie 90's microdosing.
									Tacos pinterest fanny pack venmo, post-ironic heirloom
									try-hard pabst authentic iceland.
								</p>
								<a className="inline-flex items-center">
									<img
										alt="testimonial"
										src={testimonialOne}
										className="flex-shrink-0 object-cover object-center w-12 h-12 rounded-full"
									/>
									<span className="flex flex-col flex-grow pl-4">
										<span className="font-medium text-gray-900 title-font">
											Holden Caulfield
										</span>
										<span className="text-sm text-gray-500">UI DEVELOPER</span>
									</span>
								</a>
							</div>
						</div>
						<div className="w-full p-4 md:w-1/2">
							<div className="h-full p-8 bg-gray-200 rounded">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									className="block w-5 h-5 mb-4 text-gray-400"
									viewBox="0 0 975.036 975.036"
								>
									<path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
								</svg>
								<p className="mb-6 leading-relaxed">
									Synth chartreuse iPhone lomo cray raw denim brunch everyday
									carry neutra before they sold out fixie 90's microdosing.
									Tacos pinterest fanny pack venmo, post-ironic heirloom
									try-hard pabst authentic iceland.
								</p>
								<a className="inline-flex items-center">
									<img
										alt="testimonial"
										src={testimonialTwo}
										className="flex-shrink-0 object-cover object-center w-12 h-12 rounded-full"
									/>
									<span className="flex flex-col flex-grow pl-4">
										<span className="font-medium text-gray-900 title-font">
											Alper Kamu
										</span>
										<span className="text-sm text-gray-500">DESIGNER</span>
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export const query = graphql`
	query {
		test: file(name: { eq: "test-image" }) {
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
		crech: file(name: { eq: "feature-crech" }) {
			childImageSharp {
				fluid(maxWidth: 1440) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		suikerbuilt: file(name: { eq: "feature-suikerbuilt" }) {
			childImageSharp {
				fluid(maxWidth: 1440) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		highschool: file(name: { eq: "feature-highschool" }) {
			childImageSharp {
				fluid(maxWidth: 1440) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		recycle: file(name: { eq: "feature-recycle" }) {
			childImageSharp {
				fluid(maxWidth: 1440) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;

export default IndexPage;
