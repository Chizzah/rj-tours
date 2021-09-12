import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

export default function Success() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full h-[75vh] px-4">
        <h1 className="text-xl font-semibold text-center uppercase lg:text-2xl">
          Booking sent successfully!
        </h1>
        <p className="my-4 text-xs text-center lg:text-sm">
          Thank you for booking with RJ Tours. We will be in{" "}
          <br className="hidden md:block" />
          contact soon to confirm your booking. Please click here to return to
          <br className="hidden md:block" />
          the{" "}
          <Link to="/" className="text-blue-600 underline">
            home page
          </Link>{" "}
          or proceed to the{" "}
          <Link to="/contact" className="text-blue-600 underline">
            contact page
          </Link>{" "}
          for any queries.
        </p>
      </div>
    </Layout>
  );
}
