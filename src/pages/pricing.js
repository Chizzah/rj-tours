/* eslint-disable */
import React from "react";

import Layout from "../components/layout";
import PricingCard from "../components/PricingCard/PricingCard";

const PricingPage = () => {
  return (
    <Layout>
      <section className="max-w-6xl py-12 mx-auto text-gray-700 body-font">
        <div className="mx-2 mb-4 text-xl font-semibold uppercase md:mx-0 md:mb-8 md:text-2xl">
          <h2>Pricing</h2>
        </div>
        <div className="container flex flex-col items-center py-12 mx-auto mb-8 md:flex-row md:justify-around pricing-bg">
          <PricingCard heading="Person" adult="R500" child="R320" />
          <PricingCard heading="Group" adult="R450" child="R280" />
          <PricingCard
            heading="Private Tour"
            private="Private Tours @ 1 - 6 max"
            adult="R1150"
            child="R580"
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
