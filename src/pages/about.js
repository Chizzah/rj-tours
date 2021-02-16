/* eslint-disable */
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout>
      {/* HERO SECTION */}

      <section className="flex flex-col items-center justify-center w-full text-gray-200 about-bg">
        <h1 className="text-lg font-light text-center uppercase lg:text-2xl">
          About
        </h1>
        <p className="text-2xl font-bold text-center capitalize lg:text-5xl">
          We love our community <br /> and can't wait for you to meet
        </p>
      </section>

      {/* ABOUT */}

      <section>
        <div className="max-w-3xl px-4 py-16 mx-auto lg:py-32">
          <h1 className="mb-4 font-semibold uppercase md:text-4xl">
            About RJ Tours
          </h1>
          <p className="mb-4">
            Roydin John Engelbrecht is responsible for every aspect of your
            experience with RJ.Tours is pleasing. He has been a guide for 7
            years and worked at a Game lodge and wildelife ranger.
          </p>

          <p className="mb-4">
            RJ Tours was established in 2019 but it all started when he was just
            13 years old and saw a group of tourists in his area. This is where
            the hunger that burned inside of him pushed him to think about
            starting his own business. RJ tours is located in the Oudtshoorn
            area and tourists will get the opportunity to meet the locals (local
            creche, recycling project, local community, furture leaders) and
            interact with them.
          </p>

          <p className="mb-4">
            He is passionate about getting to share his experience and
            everything Oudtshoorn has to offer ,and is quite excited to leave a
            footprint. His main objective in his business plan is to introduce
            tourists to a whole new side of Oudtshoorn area, and with RJ Tours
            he would really like to do that. The slogan of his business says
            "RJ.Tours -Oudsthoorn Flo...let's Go!!! Giving tourists a chance to
            see Oudtshoorn in a whole different way,but also learn and educate
            the forthcoming generation.
          </p>

          <p className="mb-4">
            Tourust will fell safe,learn other cultures,feel part of the
            community,professional guide,punctuality.
          </p>

          <p className="mb-4">
            365 days of beautiful weather in the Oudsthoorn area.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-1/3">
            <StaticImage
              placeholder="blurred"
              src="../images/creche.jpg"
              alt="Nomonde Creche"
            />
          </div>
          <div className="w-1/3">
            <StaticImage
              placeholder="blurred"
              src="../images/aurial-school.jpg"
              alt="Aurial College"
            />
          </div>
          <div className="w-1/3">
            <StaticImage
              placeholder="blurred"
              src="../images/recycling-center.jpg"
              alt="Recycling Center"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
