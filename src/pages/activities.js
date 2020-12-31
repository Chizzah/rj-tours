/* eslint-disable */
import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";

const ActivitiesPage = ({ data }) => {
	return (
		<Layout>
			<section className="text-gray-700 body-font">
				<div className="container flex flex-col items-center px-5 py-32 mx-auto md:flex-row">
					<div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
						<Img
							className="object-cover object-center rounded"
							alt="hero"
							fluid={data.hero.childImageSharp.fluid}
						/>
					</div>
					<div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
						<h1 className="mb-4 text-3xl font-medium text-gray-900 uppercase title-font sm:text-4xl">
							Come and share the space with the locals
						</h1>
						<div className="flex justify-center">
							<button className="inline-flex px-6 py-2 text-lg text-white bg-blue-400 border-0 rounded focus:outline-none hover:bg-blue-300">
								Book Now
							</button>
						</div>
					</div>
				</div>
			</section>
			<section className="pb-24 text-gray-700 body-font">
				<div className="green-backdrop">
					<div className="max-w-6xl py-20 mx-auto text-right text-gray-100">
						<Img
							className="mb-4 md:float-left md:w-6/12 md:mx-12 md:my-3 md:mb-0"
							fluid={data.crech.childImageSharp.fluid}
						/>
						<h2 className="mr-6 text-xl font-semibold uppercase">
							Nomonde Creche(PATIENTS)
						</h2>
						<p className="mx-6 my-3">
							NOMONDE the school consists of 56 learners, 3 teachers, 1 chef, 3
							classrooms,2 toilets and a storeroom. The creche offers EARLY
							CHILDHOOD DEVELOPMENT PROGRAMS that helps the grow of these
							minors., even though they’ve got a lack of toys for a play room, a
							play area, balls for any games that they want the kids go take
							part in, hoola's or a playground that they can play on.
						</p>
						<p className="mx-6 my-3">
							These lacks does have an impact on many of our kids and parents
							that doesn’t want go send their kids to school. Security is also a
							huge problem in that hinders us to grow within our community.
						</p>
						<p className="mx-6 my-3">
							There is still a lot of work that needs to be done when it comes
							to the structure of the creche and the a lot of safety structures
							and policies needs to put in place in order for the care he to
							function fully, but all in all these lacks doesn’t prohibit them
							from learning a third language like ISIXHOSA.
						</p>
					</div>
				</div>
				<div className="blue-backdrop">
					<div className="max-w-6xl py-20 mx-auto text-gray-100">
						<Img
							className="mb-4 md:float-right md:w-6/12 md:mx-12 md:my-3 md:mb-0"
							fluid={data.recycle.childImageSharp.fluid}
						/>
						<h2 className="ml-6 text-xl font-semibold uppercase">
							Recycling (RASSOUW RECYCLING)
						</h2>
						<p className="mx-6 my-3">
							The love for recycling started in the year 1986 for Rendal
							Rassouw, where he worked at the Andries office in Eldorado Park,
							Johannesburg. He started a small business with an unemployed
							worker and it is still in existence called CHÈ CHÈ RECYCLING. He
							has a saying that says: “RECYCLING IS NOT ONLY MY PASSION….BUT
							ALSO MY HOBBY THAT I LIVE BY”. After doing a lot of research
							Randall in 1994, realised that 80% of RECYCLING material go to
							waste on dumping sites.
						</p>
						<p className="mx-6 my-3">
							Rendal Rassouw then started his RECYCLING BUSINESS IN 2015 to make
							a positive contribution to the community as a whole. 1 Of the
							businesses mission and vision for the community, schools and
							churches is to see the importance of RECYCLING and the positive
							contribution it makes to our immediate community.
						</p>
						<p className="mx-6 my-3">
							On this venture the guests will explore the importance of
							recycling, why Rendal do what he loves every day. He will take you
							through the whole process of this and he currently only recycles
							2% of Oudtshoorn’s waste and this is an under achievement for him
							that is why HE WORKS EVERYDAY TO BETTER HIS PASSION TO TURN IT
							INTO 1 OF THE GREATEST RECGCLING PROJECTS IN THE WHOLE OF
							OUDTSHOORN.
						</p>
					</div>
				</div>
				<div className="green-backdrop">
					<div className="max-w-6xl py-20 mx-auto text-right text-gray-100">
						<Img
							className="mb-4 md:float-left md:w-6/12 md:mx-12 md:my-3 md:mb-0"
							fluid={data.aurial.childImageSharp.fluid}
						/>
						<h2 className="mr-6 text-xl font-semibold uppercase">
							Aurial College
						</h2>
						<p className="mx-6 my-3">
							Aurial college BELIEFS in grooming our future leaders, by making
							sure everyone feels safe. Bullying of any kind isn't allowed, and
							degrading comment about things like race, religion, culture,
							sexual orientation, will not be tolerated.
						</p>
						<p className="mx-6 my-3">
							The school has a broad history not only in EDUCATION but is 1 of
							the schools that actually have the German language as a subject.
						</p>
						<p className="mx-6 my-3">
							Previously the school was known for its exchange students, whereby
							3 of the best learners together with mr C Swiegelaar would go to
							DEUTCHLAND and see how they do things there when it comes to their
							way of living and also their way of studying.
						</p>
						<p className="mx-6 my-3">
							So with this said the tourist will get a chance to meet student
							and interact with them on an educational level where they will be
							able to see how diligent and hardworking these kids are.
						</p>
						<p className="mx-6 my-3">
							Oudtshoorn is a place where a lot of Tourisms opportunities are
							present especially for those students that learn this language as
							a subject. Showcasing that THE OPPORTUNITIES ARE THEIR…YOU JUST
							HAVE TO WORK HARD AND EARN HOUR PLACE IN THIS WORLD!
						</p>
					</div>
				</div>
				<div className="blue-backdrop">
					<div className="max-w-6xl py-20 mx-auto text-gray-100">
						<Img
							className="mb-4 md:float-right md:w-6/12 md:mx-12 md:my-3 md:mb-0"
							fluid={data.suikerbuilt.childImageSharp.fluid}
						/>
						<h2 className="ml-6 text-xl font-semibold uppercase">
							Suikerbuilt-Onverwacht
						</h2>
						<p className="mx-6 my-3">
							In 1968 all residents of Suikerbult (Onverwacht) were forcibly
							removed to a newly developed township called Bridgeton, situated
							across the road from Suikerbult. By the time the forced removal
							took place,very few if any were employed full time.
						</p>
						<p className="mx-6 my-3">
							Municipal health officials advised them they would have to move
							because the soil on which they lived was sour or perhaps(brak of
							suur) and extremely unhealthy. They were also told that if they
							moved it would be temporary arrangement. A contractor was paid
							R420 to flatten the premises and remove the rubble..
						</p>
						<p className="mx-6 my-3">
							There were +-14 households on the west living settlement and +-50
							on the eastern. Out of all the people that were living on
							Suikerbult (Onverwacht) forty three households were not
							accommodated into the municipal residential scheme and “had to
							make their own way" and core group of Suikerbult residents stated
							very simply” Our parents and grandparent have always lived here".
						</p>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export const query = graphql`
	query {
		hero: file(name: { eq: "activities-hero" }) {
			childImageSharp {
				fluid(maxWidth: 1440) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		crech: file(name: { eq: "crech-activities" }) {
			childImageSharp {
				fluid(maxWidth: 1440) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		recycle: file(name: { eq: "recycle-activities" }) {
			childImageSharp {
				fluid(maxWidth: 1440) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		aurial: file(name: { eq: "aurial-activities" }) {
			childImageSharp {
				fluid(maxWidth: 1440) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		suikerbuilt: file(name: { eq: "suikerbuilt-activities" }) {
			childImageSharp {
				fluid(maxWidth: 1440) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;

export default ActivitiesPage;
