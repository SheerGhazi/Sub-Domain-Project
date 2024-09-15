import React from "react";
import { MdWifiCalling3 } from "react-icons/md";

const Banner = () => {
  return (
    <div className="w-full h-auto bg-bannner-image  bg-cover bg-bottom px-5 py-10 space-y-24 md:flex gap-12 md:px-16 md:h-[120vh]  lg:space-y-0">
      <div className="left-banner space-y-4 md:w-1/2 md:flex flex-col justify-center lg:w-1/2">
        <div className="main-heading">
          <h1 className="font-bold text-4xl text-[#fff] leading-relaxed md:text-6xl">
            Plumber near me in{" "}
            <span className="uppercase text-orange-clr">usa</span>{" "}
          </h1>
        </div>
        <div className="description pb-8">
          <p className="font-medium text-lg text-[#fff]   leading-loose tracking-wider">
            Looking for Plumber services near you? Find reliable and experienced
            Plumbing Company in the USA.
          </p>
        </div>
        <a className="" href="">
          <button className="flex justify-center items-center gap-2 bg-orange-clr py-4 px-9 rounded-md hover:bg-orange-300">
            <span className="invert">
              <MdWifiCalling3 className="size-6" />
            </span>
            <p className="text-white font-medium text-base "> (877) 674-0877</p>
          </button>
        </a>
      </div>

      <div className="right-banner  md:w-1/2 md:flex flex-col justify-center md:mt-24  lg:w-1/2">
        <div className="form w-full h-fit  shadow-inner bg-white mt-4 p-4 rounded-xl ">
          <h2 className="text-[#2D3748] font-bold text-3xl text-center px-10 mb-6 ">
            Request A Free Quote
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {/* Row 1 */}
            <div className="flex flex-col">
              <label
                htmlFor="select1"
                className="text-gray-700 mb-2 font-medium"
              >
                What Do You Need?
              </label>
              <select
                id="select1"
                className="border border-gray-300   p-2 rounded-md"
              >
                <option value="">Vinyl Fence</option>
                <option value="option1">Aluminium Fence</option>
                <option value="option2">Wood Fence</option>
                <option value="option3">Chain Link Fence</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="select1"
                className="text-gray-700 mb-2 font-medium"
              >
                How Soon?
              </label>
              <select
                id="select1"
                className="border border-gray-300 p-2 rounded-md"
              >
                <option value="">As Soon as</option>
                <option value="option1">With in the next month</option>
                <option value="option2">In the next 3-6 months</option>
                <option value="option3">just getting budget idea</option>
              </select>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col">
              <label
                htmlFor="input3"
                className="text-gray-700 mb-2 font-medium"
              >
                Full Name
              </label>
              <input
                type="text"
                id="input3"
                placeholder="Full Name"
                className="border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="input4"
                className="text-gray-700 mb-2 font-medium"
              >
                Phone
              </label>
              <input
                type="text"
                id="input4"
                placeholder="Phone"
                className="border border-gray-300 p-2 rounded-md"
              />
            </div>

            {/* Row 3 */}
            <div className="flex flex-col">
              <label
                htmlFor="input5"
                className="text-gray-700 mb-2 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="input5"
                placeholder="Email"
                className="border border-gray-300 p-2  rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="input6"
                className="text-gray-700 mb-2 font-medium"
              >
                Zip Code
              </label>
              <input
                type="text"
                id="input6"
                placeholder="Zip Code"
                className="border border-gray-300 p-2  rounded-md"
              />
            </div>

            {/* Button Row - Spans 2 columns */}
            <button className="col-span-2 font-medium text-base bg-black hover:bg-gray-900 text-white p-2 rounded mt-4 ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
