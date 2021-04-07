/* eslint-disable */
import React from "react";

import Layout from "../components/layout";

const PricingPage = () => {
  return (
    <Layout>
      {/* HERO SECTION */}

      <section className="flex flex-col items-center justify-center w-full text-gray-200 pricing-bg">
        <h1 className="text-lg font-light text-center uppercase lg:text-2xl">
          Pricing
        </h1>
        <p className="text-2xl font-bold text-center capitalize lg:text-5xl">
          A worthwhile <br /> journey to embark on
        </p>
      </section>

      {/* PRICING SECTION */}

      <section className="container mx-auto mt-16 text-gray-700 border border-gray-100 border-solid shadow-sm body-font">
        <div className="container p-8 mx-auto lg:px-4">
          <div className="flex flex-wrap text-center">
            <div className="px-8 py-6 mx-auto lg:px-20 lg:w-1/3 md:w-full">
              <h2 className="mb-3 text-lg font-semibold text-gray-700 lg:text-2xl title-font">
                Per Person
              </h2>
              <div className="flex flex-col items-center justify-center px-2 text-center lg:h-32">
                <h3 className="tracking-widest">ADULT</h3>
                <h2 className="flex items-center justify-center mt-2 mb-4 text-3xl font-bold leading-none text-blue-400 lg:text-6xl">
                  R550
                </h2>
              </div>
              <div className="flex flex-col items-center justify-center px-2 text-center lg:h-32">
                <h3 className="tracking-widest">CHILD (4 - 12 years)</h3>
                <h2 className="flex items-center justify-center mt-2 mb-4 text-3xl font-bold leading-none text-blue-400 lg:text-6xl">
                  R310
                </h2>
              </div>
              <button className="flex items-center px-4 py-2 mx-auto mt-auto font-semibold text-black duration-500 ease-in-out transform bg-white border rounded-lg shadow-xl transittion hover:text-white hover:bg-black hover:border-black focus:shadow-outline focus:outline-none">
                Book Now
              </button>
            </div>
            <div className="px-8 py-6 mx-auto lg:px-20 lg:w-1/3 md:w-full">
              <h2 className="mb-3 text-lg font-semibold text-gray-700 lg:text-2xl title-font">
                Group Tours
              </h2>
              <div className="flex flex-col items-center justify-center px-2 text-center lg:h-32">
                <h3 className="tracking-widest">ADULT</h3>
                <h2 className="flex items-center justify-center mt-2 mb-4 text-3xl font-bold leading-none text-blue-400 lg:text-6xl">
                  R430
                </h2>
              </div>
              <div className="flex flex-col items-center justify-center px-2 text-center lg:h-32">
                <h3 className="tracking-widest">CHILD (4 - 12 years)</h3>
                <h2 className="flex items-center justify-center mt-2 mb-4 text-3xl font-bold leading-none text-blue-400 lg:text-6xl">
                  R270
                </h2>
              </div>
              <button className="flex items-center px-4 py-2 mx-auto mt-auto font-semibold text-black duration-500 ease-in-out transform bg-white border rounded-lg shadow-xl transittion hover:text-white hover:bg-black hover:border-black focus:shadow-outline focus:outline-none">
                Book Now
              </button>
            </div>
            <div className="px-8 py-6 mx-auto lg:px-20 lg:w-1/3 md:w-full">
              <h2 className="mb-3 text-lg font-semibold text-gray-700 lg:text-2xl title-font">
                Private Tours
              </h2>
              <div className="flex flex-col items-center justify-center px-2 text-center lg:h-32">
                <h3 className="tracking-widest">ADULT</h3>
                <h2 className="flex items-center justify-center mt-2 mb-4 text-3xl font-bold leading-none text-blue-400 lg:text-6xl">
                  R870
                </h2>
              </div>
              <div className="flex flex-col items-center justify-center px-2 text-center lg:h-32">
                <h3 className="tracking-widest">CHILD (4 - 12 years)</h3>
                <h2 className="flex items-center justify-center mt-2 mb-4 text-3xl font-bold leading-none text-blue-400 lg:text-6xl">
                  R410
                </h2>
              </div>
              <button className="flex items-center px-4 py-2 mx-auto mt-auto font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 hover:-translate-y-1 hover:scale-110 focus:shadow-outline focus:outline-none">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* INFO SECTION */}

      <section className="text-gray-700 body-font">
        <div className="container px-8 pt-32 mx-auto lg:px-4">
          <h2 className="mb-4 font-semibold text-blue-400 uppercase md:mb-8 md:text-2xl">
            Monday to Friday Tours
          </h2>
          <p className="mb-2 text-sm md:mb-4">
            <i>2 hours and 30 minutes of wonderful and exciting experiences.</i>
          </p>
          <p className="mb-2 md:mb-4 lg:w-1/2">
            <strong>REQUIREMENTS:</strong> Comfortable clothes, sneakers or
            closed shoes, a hat, sunblock, rain coat if its cold….and don’t
            forget your camera to capture the iconic memorable moments.
          </p>
          <p className="mb-2 md:mb-4">
            <strong>Summer:</strong> September - April
          </p>
          <p className="mb-2 md:mb-4">
            <strong>Summer Times Slots:</strong> 08:00/10:30 & 11:00/13:30
          </p>
          <p className="mb-2 md:mb-4">
            <strong>Winter:</strong> May - August
          </p>
          <p className="mb-2 md:mb-4">
            <strong>Winter Time Slots:</strong> 09:00/11:30 & 12:00/14:30
          </p>
        </div>
        <div className="container px-8 pt-16 mx-auto lg:px-4">
          <h2 className="mb-4 font-semibold text-blue-400 uppercase md:mb-8 md:text-2xl">
            Saturday Tours
          </h2>
          <p className="mb-2 text-sm md:mb-4">
            <i>Only 1 hour and 30 minutes</i>
          </p>
          <p className="mb-2 md:mb-4">
            Suikerbult & Recycling @ less 15% discount
          </p>
          <p className="mb-2 md:mb-4">
            <strong>Time Slot One:</strong> 09h00 - 10h30
          </p>
          <p className="mb-2 md:mb-4">
            <strong>Time Slot Two:</strong> 11h00 – 12h30
          </p>
        </div>
        <div className="container px-8 pt-16 pb-32 mx-auto lg:px-4">
          <h2 className="mb-4 font-semibold text-blue-400 uppercase md:mb-8 md:text-2xl">
            Transportation
          </h2>
          <p className="mb-2 md:mb-4">
            @R120 per person (under 4 years complimentary)
          </p>
          <p className="mb-2 md:mb-4">
            Pick up and drop available on 30 minutes prior tour departure times
          </p>
          <p className="mb-2 md:mb-4">
            Arrival of 15min required prior departure to complete necessary
            documents.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default PricingPage;
