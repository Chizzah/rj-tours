/* eslint-disable */
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import LeftToRight from "../components/Animations/LeftToRight";
import RightToLeft from "../components/Animations/RightToLeft";

import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      {/* HERO */}

      <section className="text-gray-700 body-font home-bg">
        <div className="container px-8 py-48 mx-auto lg:px-4">
          <div className="flex flex-col w-full mb-12 text-left lg:text-center">
            <h2 className="mb-1 text-sm font-semibold tracking-widest text-blue-600 uppercase title-font">
              Enrich the experience
            </h2>
            <h1 className="mb-6 text-2xl font-semibold tracking-tighter text-gray-100 uppercase sm:text-4xl title-font">
              Community tours <br className="md:hidden" /> in Oudtshoorn.
            </h1>
            <p className="mx-auto text-base font-medium leading-relaxed text-gray-300 lg:w-2/3">
              RJ Tours, the operational sole trader located in the heart of the
              Klein Karoo. A local socially responsible Footprint Tour,
              providing guests the opportunity to meet and interact with the
              local community from an inspirational footprint tour.
            </p>
          </div>
          <div className="flex lg:justify-center">
            <Link to="/contact">
              <button className="flex items-center px-6 py-3 mt-auto text-lg font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 hover:-translate-y-1 hover:scale-110 focus:shadow-outline focus:outline-none">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}

      <section className="py-24 text-center text-gray-100 bg-green-400">
        <div className="md:mx-auto md:max-w-4xl">
          <div className="md:mt-8 md:mb-8">
            <h2 className="mb-8 font-semibold capitalize md:mb-16 md:text-2xl">
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

      {/* FEATURES */}

      <section className="text-gray-700 bg-gray-100 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h2 className="mb-8 font-semibold text-center text-blue-400 uppercase md:mb-16 md:text-2xl">
            Highlights of the tour
          </h2>
          <RightToLeft>
            <div className="flex flex-col items-center pb-10 mx-auto mb-10 border-b border-gray-200 lg:w-3/5 sm:flex-row">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 overflow-hidden text-indigo-500 bg-indigo-100 rounded-full sm:w-32 sm:h-32 sm:mr-10">
                <StaticImage
                  className="w-full h-full overflow-hidden"
                  src="../images/feature-creche.jpg"
                  alt="Nomonde Creche"
                />
              </div>
              <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
                <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">
                  With your input Nomonde Crèche can accelerate (week days only)
                </h2>
                <p className="text-base leading-relaxed">
                  Patience for our future leaders is all where the phrase
                  “Nomonde” comes from. Back in 1994, the crèche came to
                  existence and is still up in running laying the foundation of
                  successful leaders of tomorrow. Conservation is implemented as
                  a curriculum, reprocessing raw material working hand-in-hand
                  with creating a better lifestyle and introducing change to the
                  world.
                </p>
                <Link
                  to="/activities"
                  className="inline-flex items-center mt-3 text-blue-400"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </RightToLeft>
          <LeftToRight>
            <div className="flex flex-col items-center pb-10 mx-auto mb-10 border-b border-gray-200 lg:w-3/5 sm:flex-row">
              <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
                <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">
                  Discover Suikerbuilt ‘Ghetto’ Community
                </h2>
                <p className="text-base leading-relaxed">
                  A historic, little populated and developing area. A
                  breathtaking life style and people with strong belief as in
                  what they feel belongs to them. Informal settlement in which
                  they believe is where they are enrooted by their grandparents
                  and forefathers. An astounding experience you don’t want to
                  miss, where generations clings to the fact that storms may
                  come but that is where they belong.
                </p>
                <Link
                  to="/activities"
                  className="inline-flex items-center mt-3 text-blue-400"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              <div className="inline-flex items-center justify-center flex-shrink-0 order-first w-20 h-20 overflow-hidden text-indigo-500 bg-indigo-100 rounded-full sm:w-32 sm:order-none sm:h-32 sm:ml-10">
                <StaticImage
                  className="w-full h-full overflow-hidden"
                  src="../../images/feature-suikerbuilt.jpg"
                  alt="Suikerbuilt Community"
                />
              </div>
            </div>
          </LeftToRight>
          <RightToLeft>
            <div className="flex flex-col items-center pb-10 mx-auto mb-10 border-b border-gray-200 lg:w-3/5 sm:flex-row">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 overflow-hidden text-indigo-500 bg-indigo-100 rounded-full sm:w-32 sm:h-32 sm:mr-10">
                <StaticImage
                  className="w-full h-full overflow-hidden"
                  src="../images/feature-highschool.jpg"
                  alt="Aurial College"
                />
              </div>
              <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
                <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">
                  Our Impressive Aurial College (Week Days Only)
                </h2>
                <p className="text-base leading-relaxed">
                  An opportunity to interact with our high school -leveled
                  scholars, as to an aim for them to explore what more the world
                  has to offer. We will set a platform for them to step on and
                  be able to spread their wings abroad. Together we can feel
                  free and enjoy our locally prepared refreshments.
                </p>
                <Link
                  to="/activities"
                  className="inline-flex items-center mt-3 text-blue-400"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </RightToLeft>
          <LeftToRight>
            <div className="flex flex-col items-center mx-auto lg:w-3/5 sm:flex-row">
              <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
                <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">
                  Let’s Extract, Refine And Reprocess To Make A Better Living
                  For All!
                </h2>
                <p className="text-base leading-relaxed">
                  A life time story on how passion for constructing raw material
                  came into action. Taking it back from 1986, through to 1994
                  were the company came into existence and how it all changes
                  lives in our current decade. Plastic is the main product, but
                  instilling the importance of its value in our
                  society/community.
                </p>
                <Link
                  to="/activities"
                  className="inline-flex items-center mt-3 text-blue-400"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              <div className="inline-flex items-center justify-center flex-shrink-0 order-first w-20 h-20 overflow-hidden text-indigo-500 bg-indigo-100 rounded-full sm:w-32 sm:order-none sm:h-32 sm:ml-10">
                <StaticImage
                  className="w-full h-full overflow-hidden"
                  src="../images/feature-recycle.jpg"
                />
              </div>
            </div>
          </LeftToRight>
        </div>
      </section>

      {/* TESTIMONIALS */}

      <section className="text-gray-900 bg-blue-400 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h2 className="mb-8 font-semibold text-center text-gray-100 uppercase md:mb-16 md:text-2xl">
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
                  <StaticImage
                    className="flex-shrink-0 object-cover object-center w-12 h-12 rounded-full"
                    src="../../static/testimonial-1.jpg"
                    alt="Testimonial One"
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
                  <StaticImage
                    className="flex-shrink-0 object-cover object-center w-12 h-12 rounded-full"
                    src="../../static/testimonial-2.jpg"
                    alt="Testimonial Two"
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

export default IndexPage;
