import React from "react";
import { MdWifiCalling3 } from "react-icons/md";

const Banner = () => {
  return (
    <div className="w-full h-auto bg-bannner-image  bg-cover bg-bottom px-5 py-5">
      <div className="left-banner">
        <div className="main-heading">
          <h1 className="font-bold text-4xl text-[#fff] leading-loose">
            Plumber near me in{" "}
            <span className="uppercase text-orange-clr">usa</span>{" "}
          </h1>
        </div>
        <div className="description">
          <p className="font-medium text-lg text-[#fff]   leading-loose tracking-wider">
            Looking for Plumber services near you? Find reliable and experienced
            Plumbing Company in the USA.
          </p>
        </div>
        <a href="">
          <button className="flex justify-center items-center gap-2 bg-orange-clr py-4 px-9 rounded-md">
            <span className="invert">
              <MdWifiCalling3 />
            </span>
            <p className="text-white font-medium text-base "> (877) 674-0877</p>
          </button>
        </a>
      </div>
      
      <div className="right-banner w-full h-auto bg-white mt-4 p-4">
  <h2 className="text-[#2D3748] font-bold text-2xl text-center mb-4">
    Request A Free Quote
  </h2>
  
  <div className="grid grid-cols-2 gap-4">
    {/* Row 1 */}
    <div className="flex flex-col">
      <label htmlFor="input1" className="text-gray-700 mb-2">Label 1</label>
      <input
        type="text"
        id="input1"
        placeholder="Input 1"
        className="border border-gray-300 p-2"
      />
    </div>
    <div className="flex flex-col">
      <label htmlFor="input2" className="text-gray-700 mb-2">Label 2</label>
      <input
        type="text"
        id="input2"
        placeholder="Input 2"
        className="border border-gray-300 p-2"
      />
    </div>

    {/* Row 2 */}
    <div className="flex flex-col">
      <label htmlFor="input3" className="text-gray-700 mb-2">Label 3</label>
      <input
        type="text"
        id="input3"
        placeholder="Input 3"
        className="border border-gray-300 p-2"
      />
    </div>
    <div className="flex flex-col">
      <label htmlFor="input4" className="text-gray-700 mb-2">Label 4</label>
      <input
        type="text"
        id="input4"
        placeholder="Input 4"
        className="border border-gray-300 p-2"
      />
    </div>

    {/* Row 3 */}
    <div className="flex flex-col">
      <label htmlFor="input5" className="text-gray-700 mb-2">Label 5</label>
      <input
        type="text"
        id="input5"
        placeholder="Input 5"
        className="border border-gray-300 p-2"
      />
    </div>
    <div className="flex flex-col">
      <label htmlFor="input6" className="text-gray-700 mb-2">Label 6</label>
      <input
        type="text"
        id="input6"
        placeholder="Input 6"
        className="border border-gray-300 p-2"
      />
    </div>

    {/* Button Row - Spans 2 columns */}
    <button
      className="col-span-2 bg-blue-500 text-white p-2 rounded mt-4"
    >
      Submit
    </button>
  </div>
</div>

    </div>
  );
};

export default Banner;
