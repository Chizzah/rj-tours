/* eslint-disable */
import React from "react";

import Layout from "../components/layout";

const ContactPage = () => {
  return (
    <Layout>
      <section className="relative text-gray-700 body-font">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106314.23420014132!2d22.084548317921442!3d-33.62294861102425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dd5c186eab513b5%3A0x8d4347748e08eb61!2sOudtshoorn!5e0!3m2!1sen!2sza!4v1602935010983!5m2!1sen!2sza"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          ></iframe>
        </div>
        <form action={process.env.GATSBY_BOOKING_FORM_API} method="POST">
          <input className="hidden" type="text" name="_honey" />
          <input
            className="hidden"
            type="hidden"
            name="_template"
            value="box"
          />
          <input
            className="hidden"
            type="hidden"
            name="_next"
            value={`${process.env.GATSBY_SITE_URL}/success`}
          />
          <input
            className="hidden"
            type="hidden"
            name="_url"
            value={`${process.env.GATSBY_SITE_URL}/contact`}
          />
          <div className="container flex px-5 py-24 mx-auto">
            <div className="relative z-10 flex flex-col w-full p-8 mt-10 bg-white rounded-lg lg:w-1/3 md:w-1/2 md:ml-auto md:mt-0">
              <h2 className="mb-1 text-lg font-medium text-gray-900 title-font">
                Contact Us
              </h2>
              <p className="mb-5 leading-relaxed text-gray-600">
                Get in touch with us via the contact form!
              </p>
              <input
                className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded-full focus:outline-none focus:border-green-400"
                placeholder="Email"
                type="email"
                name="email"
              />
              <textarea
                className="h-32 px-4 py-2 mb-4 text-base bg-white border border-gray-400 resize-none rounded-xl focus:outline-none focus:border-green-400"
                placeholder="Message"
                name="message"
              />
              <button className="px-6 py-2 text-lg text-white bg-green-400 border-0 rounded focus:outline-none hover:bg-green-500">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </section>
    </Layout>
  );
};

export default ContactPage;
