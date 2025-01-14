// import React from 'react'
import AboutBg from "../../public/about-image.png";

const About = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center gap-[75px] py-[100px] relative">
        <div className="w-[50%]">
          <h1 className="text-6xl font-semibold mb-12">Our Story</h1>
          <div className="flex flex-col gap-6 text-base font-normal">
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 ">
          <img src={AboutBg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
