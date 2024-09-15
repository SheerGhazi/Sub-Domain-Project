import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-white w-full h-auto  py-16 px-3 my-4 border border-gray-300 rounded-sm md:px-9 ">
      <div className="card flex flex-col justify-center items-center text-center gap-8">
        <h3 className="font-bold text-xl">{title} Near Me</h3>
        <p className="text-[#333333]">{description}</p>

        <a href="tel:(877) 674-0877">
          <button className="flex justify-center items-center px-4 py-2 border border-gray-300 rounded-sm gap-2   ">
            <span className="font-medium text-sm">Get Quotes</span>
            <div className="icon w-fit p-1 bg-yellow-400 rounded-full ">
              <IoIosArrowRoundForward className="size-5" />
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
