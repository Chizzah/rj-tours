import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div>
        <StaticImage
          placeholder="blurred"
          className="block w-1/2 mx-auto"
          src="../images/abduction-illustration.svg"
          alt="Ghost getting abducted by aliens"
        />
        <h2 className="inline-block p-3 my-8 text-2xl font-bold bg-yellow-400">
          Looks like this page is a ghost that got abducted by aliens...
        </h2>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
