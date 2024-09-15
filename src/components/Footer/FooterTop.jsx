import React from "react";

const FooterTop = () => {
  return (
    <div className="w-full h-auto bg-[#0e3c39]">
      <div>
        <div className="">
          <div className="icon"></div>
          <div className="icon-heading"></div>
        </div>
        <div className="infoo">
          <div className="links">
            <div className="location">
              <div className="location-icon"></div>
              <div className="location-txt"></div>
            </div>
            <div className="Phone">
              <div className="Phone-icon"></div>
              <div className="Phone-txt"></div>
            </div>
            <div className="Message">
              <div className="Message-icon"></div>
              <div className="Message-txt"></div>
            </div>
            <div className="Time">
              <div className="Time-icon"></div>
              <div className="Time-txt"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="subscribe">
        <div className="subscribe-title"></div>
      </div>
      <div></div>
    </div>
  );
};

export default FooterTop;
