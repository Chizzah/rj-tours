/* eslint-disable */
import React from "react";

import Layout from "../components/layout";
import PricingCard from "../components/PricingCard/PricingCard";

const PricingPage = () => {
  return (
    <Layout>
      <section class="text-gray-700 body-font">
        <div class="container px-8 pt-32 mx-auto lg:px-4">
          <div class="flex flex-wrap text-center">
            <div class="px-8 py-6 mx-auto lg:px-20 lg:w-1/3 md:w-full">
              <h2 class="mb-3 text-lg font-semibold text-gray-700 lg:text-2xl title-font">
                {" "}
                User 1
              </h2>
              <p class="mb-4 text-base leading-relaxed">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <div class="flex flex-col items-center justify-center px-2 text-center lg:h-32">
                <h3 class="tracking-widest">START</h3>
                <h2 class="flex items-center justify-center mt-2 mb-4 text-3xl font-bold leading-none text-blue-800 lg:text-6xl">
                  $8
                  <span class="ml-1 text-base text-gray-600">/mo</span>
                </h2>
              </div>
              <button class="flex items-center px-4 py-2 mx-auto mt-auto font-semibold text-black duration-500 ease-in-out transform bg-white border rounded-lg shadow-xl transittion hover:text-white hover:bg-black hover:border-black focus:shadow-outline focus:outline-none">
                Action
              </button>
            </div>
            <div class="px-8 py-6 mx-auto lg:px-20 lg:w-1/3 md:w-full">
              <h2 class="mb-3 text-lg font-semibold text-gray-700 lg:text-2xl title-font">
                {" "}
                User 2
              </h2>
              <p class="mb-4 text-base leading-relaxed">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <div class="flex flex-col items-center justify-center px-2 text-center lg:h-32">
                <h3 class="tracking-widest">START</h3>
                <h2 class="flex items-center justify-center mt-2 mb-4 text-3xl font-bold leading-none text-blue-800 lg:text-6xl">
                  $16
                  <span class="ml-1 text-base text-gray-600">/mo</span>
                </h2>
              </div>
              <button class="flex items-center px-4 py-2 mx-auto mt-auto font-semibold text-black duration-500 ease-in-out transform bg-white border rounded-lg shadow-xl transittion hover:text-white hover:bg-black hover:border-black focus:shadow-outline focus:outline-none">
                Action
              </button>
            </div>
            <div class="px-8 py-6 mx-auto lg:px-20 lg:w-1/3 md:w-full">
              <h2 class="mb-3 text-lg font-semibold text-gray-700 lg:text-2xl title-font">
                {" "}
                User 3
              </h2>
              <p class="mb-4 text-base leading-relaxed">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <div class="flex flex-col items-center justify-center px-2 text-center lg:h-32">
                <h3 class="tracking-widest">PRO</h3>
                <h2 class="flex items-center justify-center mt-2 mb-4 text-3xl font-bold leading-none text-blue-800 lg:text-6xl">
                  $38
                  <span class="ml-1 text-base text-gray-600">/mo</span>
                </h2>
              </div>
              <button class="flex items-center px-4 py-2 mx-auto mt-auto font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 hover:-translate-y-1 hover:scale-110 focus:shadow-outline focus:outline-none">
                Action
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center w-full text-gray-200 pricing-bg">
        <p>Pricing</p>
        <h1 className="w-7/12 text-5xl font-bold text-center uppercase">
          Come join us on a journey through our community
        </h1>
        <button>Book now</button>
      </section>
      <section className="max-w-6xl py-12 mx-auto text-gray-700 body-font">
        <div className="mx-2 mb-4 text-xl font-semibold uppercase md:mx-0 md:mb-8 md:text-2xl">
          <h2>Pricing</h2>
        </div>
        <div className="container flex flex-col items-center justify-center py-12 mx-auto mb-8 md:flex-row pricing-bg">
          <PricingCard heading="Per Person" adult="R550" child="R270" />
          <PricingCard heading="Group Tours" adult="R450" child="R230" />
          <PricingCard
            heading="Private Tour"
            private="Private Tours @ 1 - 6 max"
            adult="R870"
            child="R510"
          />
        </div>
        <div>
          <h2 className="mx-2 my-4 text-xl font-semibold uppercase md:mx-0 md:mb-8 md:text-2xl">
            Additional Information
          </h2>
        </div>
        <div className="container flex justify-center py-12 mx-auto pricing-bg">
          <div className="w-11/12 py-24 my-8 duration-300 ease-in-out transform bg-white rounded shadow-lg cursor-pointer md:py-0">
            <div className="mx-4 my-8 md:ml-4 md:mt-4">
              <h3 className="my-4 font-semibold uppercase md:mb-8 md:text-lg">
                Duration & Time Slots
              </h3>
              <p className="mb-2">
                <strong>Tour Duration:</strong> 2h30
              </p>
              <p className="mb-2">
                <strong>Summer Time Slots (Sep - Apr):</strong> 08:00 - 10:30 &
                11:00 - 13:30
              </p>
              <p className="mb-8">
                <strong>Winter Time Slots (May - Aug):</strong> 08:00 - 10:30 &
                11:00 - 13:30
              </p>
            </div>
            <div className="mx-4 md:ml-4 md:mt-4">
              <h3 className="my-4 mb-8 font-semibold uppercase md:text-lg">
                Saturday & Sunday Tours
              </h3>
              <p className="mb-2">
                <strong>Tour Discount:</strong> 15%
              </p>
              <p className="mb-2">
                <strong>Tour Duration:</strong> 1h30
              </p>
              <p className="mb-2">
                <strong>Summer Time Slots (Sep - Apr):</strong> 09:00 - 10:30 &
                11:00 - 12:30
              </p>
              <p className="mb-8">
                <strong>Winter Time Slots (May - Aug):</strong> 09:00 - 10:30 &
                11:00 - 12:30
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PricingPage;
