import React from "react";
import "./Banner.css";
import calender from "../../assets/Icons/calender.png";

const BannerBottom = () => {
  return (
    <div className="w-full h-auto bg-[#01493b] text-white flex flex-col items-center ">
      <div className="goto py-8 flex flex-col gap-12 md:flex-row md:gap-20  ">
        <div className="count-fst flex gap-3 ">
          <div className="logo size-14">
            <img src={calender} alt="" />
          </div>
          <div id="numbers">
            <span className="count">866</span> <span>+</span>
            <div>Services Providers</div>
          </div>
        </div>
        <div className="count-fst flex gap-3">
          <div className="logo size-14">
            <img src={calender} alt="" />
          </div>
          <div id="numbers">
            <span className="count">1500</span> <span>+</span>
            <div className="num-all">Order Served</div>
          </div>
        </div>

        <div className="count-fst flex gap-3">
          <div className="logo size-14">
            <img src={calender} alt="" />
          </div>
          <div id="numbers">
            <span className="count">455</span> <span>+</span>
            <div className="num-all">5 Start Received</div>
          </div>
        </div>

        {/* <div style={{ clear: "both" }}></div> */}
      </div>
    </div>
  );
};

export default BannerBottom;
