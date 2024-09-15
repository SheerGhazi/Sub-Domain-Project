import React from "react";
import Footer_Icon from "../../assets/Images/Footer-Icon.webp";
import { ImLocation2 } from "react-icons/im";
import { FaPhoneVolume } from "react-icons/fa6";
import { LuMailPlus } from "react-icons/lu";
import { BsStopwatch } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const FooterTop = () => {
  return (
    <div className="w-full h-auto bg-[#0e3c39] px-4 py-20 lg:flex">
      <div className="pb-10 space-y-5 lg:w-1/3">
        <div className="icon">
          <img className="h-16 w-36" src={Footer_Icon} alt="" />
        </div>
        <div className="icon-heading ">
          <h5 className="font-normal text-base text-white">USA Plumber</h5>
        </div>
      </div>
     
        <div className="info pb-10 lg:w-1/3">
          <div className="info-hd pb-5">
            <h6 className="text-xl font-semibold text-white uppercase">Contact info</h6>
          </div>
          <div className="links space-y-6">
            <div className="location flex gap-4  ">
              <div className="location-icon">
                <ImLocation2 size={20}  color="#ff7033" />
              </div>
              <div className="location-txt text-white font-normal text-base">
                <p>USA Plumber Pros.</p>
              </div>
            </div>
            <div className="Phone flex gap-4 ">
              <div className="Phone-icon">
                <FaPhoneVolume  size={20}  color="#ff7033"/>
              </div>
              <div className="Phone-txt text-white font-normal text-base">
                <a href="#">(877) 674-0877</a>
              </div>
            </div>
            <div className="Message flex gap-4 ">
              <div className="Message-icon">
                <LuMailPlus size={20} color="#ff7033" />
              </div>
              <div className="Message-txt text-white font-normal text-base">
                <a href="#">info@bestplumberbradford.com</a>
              </div>
            </div>
            <div className="Time flex gap-4 ">
              <div className="Time-icon">
                <BsStopwatch size={20} color="#ff7033"/>
              </div>
              <div className="Time-txt text-white font-normal text-base">8:00am-6:00pm</div>
            </div>
          </div>
        </div>
     
      <div className="subscribe lg:w-1/3 px-5">
        <div className="subscribe-title pb-5">
          <h3 className="text-xl font-semibold text-white uppercase">Subscribe to Newsletter</h3>
        </div>
        <div className="subscribe-desc py-4">
          <p className="text-white font-normal text-base leading-loose">
            Join our subscribers list to get the latest news and special offers
          </p>
        </div>
        <div className="subscribe-email pb-2">
          {" "}
          <input
            type="email"
            id="input5"
            placeholder="Enter Your Email"
            className="border w-full border-gray-300 p-3  rounded-md"
          />
        </div>
        <div className="subscribe-btn pb-5">
          {" "}
          <button className="col-span-2 font-medium text-base bg-[#ff7033] text-white p-3 w-full rounded mt-4 ">
           Subscribe Now
          </button>
        </div>
        <div className="subscribe-social-links flex gap-4">
          <div className="facebook-icon">
            {" "}
            <a href="#">
              {" "}
              <FaFacebookF size={20} color="#ff7033" />{" "}
            </a>
          </div>
          <div className="insta-icon">
            {" "}
            <a href="#">
              {" "}
              <IoLogoInstagram  size={20} color="#ff7033" />{" "}
            </a>
          </div>
          <div className="twitter-icon">
            {" "}
            <a href="#">
              {" "}
              <FaTwitter size={20}  color="#ff7033" />{" "}
            </a>
          </div>
          <div className="linkedin-icon">
            {" "}
            <a href="#">
              {" "}
              <FaLinkedinIn size={20}  color="#ff7033" />{" "}
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
