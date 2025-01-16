// import React from 'react'
import AboutBg from "../../public/about-image.png";
import Service from "../components/Service";
import Stats from "../components/Stats";
import delivery from "../../public/icon-delivery.svg";
import cs from "../../public/icon-Customer Service.svg";
import secure from "../../public/icon-secure.svg";
import Member from "../components/Member";
import team1 from "../../public/team1.png";
import team2 from "../../public/team2.png";
import team3 from "../../public/team3.png";
import shop from "../../public/icon_shop.svg";
// import sale from "../../public/icon-Sale.svg";
import money from "../../public/icon-Moneybag.svg";
import bag from "../../public/icon-Shopping bag.svg";
const About = () => {
  return (
    <div className="">
      {/* Hero */}
      <div className="container mx-auto flex items-center gap-[75px] py-[100px] relative">
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
          <img src={AboutBg} alt="about image" />
        </div>
      </div>
      {/* Stats */}
      <div className="container mx-auto flex gap-24 justify-center items-center mt-[140px]">
        <Stats icon={shop} title="10.5K" desc="Sallers active our site" />
        <Stats icon={secure} title="33K" desc="Montly Product Sale" />
        <Stats icon={bag} title="45.5K" desc="Customer active in our site" />
        <Stats icon={money} title="25K" desc="Annual grass sale in our site" />
      </div>

      {/* Team Members */}
      <div className="flex gap-[30px] justify-center mt-[140px]">
        <Member
          profile={team1}
          name="Tom Cruise"
          position="Founder & Chairman"
        />
        <Member
          profile={team2}
          name="Emma Watson"
          position="Managing Director"
        />
        <Member profile={team3} name="Will Smith" position="Product Designer" />
      </div>

      {/* Service */}
      <div className="container mx-auto flex gap-24 items-center justify-center mt-[140px]">
        <Service
          icon={delivery}
          title="FREE DELIVERY"
          desc="Free delivery for all orders over $140"
        />
        <Service
          icon={cs}
          title="24/7 CUSTOMER SERVICE"
          desc="Friendly 24/7 customer support"
        />
        <Service
          icon={secure}
          title="MONEY BACK GUARANTEE"
          desc="We reurn money within 30 days"
        />
      </div>
    
    </div>
  );
};

export default About;
