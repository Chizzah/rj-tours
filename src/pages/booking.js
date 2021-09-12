import React from "react";

import Layout from "../components/layout";

export default function Booking() {
  return (
    <Layout>
      <section className="py-8 text-xs lg:text-sm lg:py-16">
        <form
          className="w-8/12 p-8 mx-auto border border-gray-400 border-solid rounded-3xl lg:w-1/2 2xl:w-1/3"
          action={`${process.env.GATSBY_BOOKING_FORM_API}`}
          method="POST"
        >
          <h1 className="mb-8 text-xl font-semibold text-center uppercase lg:text-2xl">
            Booking your experience today!
          </h1>
          <input type="hidden" name="_template" value="box" />
          <input className="hidden" type="text" name="_honey" />
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 justify-evenly">
              <input
                className="w-1/2 my-2 text-xs rounded-full lg:text-sm"
                type="text"
                name="firstName"
                placeholder="First Name"
                required
              />
              <input
                className="w-1/2 my-2 text-xs rounded-full lg:text-sm"
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="flex items-center space-x-4 justify-evenly">
              <input
                className="w-1/2 my-2 text-xs rounded-full lg:text-sm"
                type="date"
                name="date"
                placeholder="Date"
                required
              />
              <input
                className="w-1/2 my-2 text-xs rounded-full lg:text-sm"
                type="time"
                name="time"
                placeholder="Time"
                required
              />
            </div>
            <div className="flex items-center space-x-4 justify-evenly">
              <input
                className="w-1/4 my-2 text-xs rounded-full lg:text-sm"
                type="number"
                name="adults"
                placeholder="Adults"
                required
              />
              <input
                className="w-1/4 my-2 text-xs rounded-full lg:text-sm"
                type="number"
                name="children"
                placeholder="Children"
              />
              <input
                className="w-1/4 my-2 text-xs rounded-full lg:text-sm"
                type="number"
                name="childrenUnder3"
                placeholder="Children (< 3)"
              />
              <input
                className="w-1/4 my-2 text-xs rounded-full lg:text-sm"
                type="number"
                name="groups"
                placeholder="Groups"
              />
            </div>
          </div>
          <div>
            <h2 className="my-4 text-sm font-semibold underline lg:text-base">
              Please read the privacy policy of RJ Tours:
            </h2>
            <ul className="2xl:ml-4">
              <li className="py-1 list-disc">
                48 hours notice to make a booking.
              </li>
              <li className="py-1 list-disc">
                50% deposit once booking is confirmed.
              </li>
              <li className="py-1 list-disc">RJ Tours is COVID compliant</li>
              <li className="py-1 list-disc">
                Clients will need to complete an indemnity form before the tour.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="my-4 text-sm font-semibold underline lg:text-base">
              Cancellation Policy
            </h2>
            <ul className="2xl:ml-4">
              <li className="py-1 list-disc">
                Please note cancellation will incur a cancellation
              </li>
              <li className="py-1 list-disc">
                1 month before the booking is cancelled. The cancellation fee
                will be 15% of deposit.
              </li>
              <li className="py-1 list-disc">
                1 week before the booking is cancelled. The cancellation fee
                will be 50% of deposit.
              </li>
              <li className="py-1 list-disc">
                1 day before the booking is cancelled. The cancellation fee will
                be 100% of deposit.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="my-4 text-sm font-semibold underline lg:text-base">
              Declaration
            </h2>
            <label htmlFor="declaration">
              <input
                className="rounded 2xl:ml-1"
                type="checkbox"
                name="declaration"
                required
              />
              <span className="ml-4">
                I agree to the full terms of RJ Tours privacy policy.
              </span>
            </label>
          </div>
          <button className="w-full py-2 mt-8 font-semibold text-white uppercase bg-green-600 border-0 rounded-full lg:text-lg focus:outline-none hover:bg-green-500">
            Book Now
          </button>
        </form>
      </section>
    </Layout>
  );
}
