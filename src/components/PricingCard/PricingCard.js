/* eslint-disable */
import React from "react";
import { Link } from "gatsby";

const PricingCard = (props) => {
  return (
    <div className="flex flex-col items-center justify-center w-10/12 my-8 duration-300 ease-in-out transform bg-white border border-gray-900 rounded-lg shadow-lg cursor-pointer h-96 hover:scale-105 md:w-64">
      <div className="flex flex-col items-center justify-around md:justify-around md:w-64 md:h-96">
        <h2 className="text-xl font-semibold text-center uppercase">
          {props.heading}
          <br />
          <span className="text-xs font-light capitalize">{props.private}</span>
        </h2>
        <div className="text-center">
          <p className="my-2 text-base font-light text-gray-500 uppercase">
            <strong className="font-semibold">Adult</strong> {props.adult}
          </p>
          <p className="my-2 text-base font-light text-gray-500 uppercase">
            <strong className="font-semibold">Child</strong> (7 - 12){" "}
            {props.child}
          </p>
        </div>
        <Link to="/contact">
          <button className="flex items-center px-4 py-2 mx-auto mt-auto font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-green-500 hover:from-green-500 to-green-400 hover:to-green-700 hover:-translate-y-1 hover:scale-110 focus:shadow-outline focus:outline-none">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
