import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "../../app/data";

const SerCards = () => {
  return (
    <div className="w-full h-auto px-16 pb-40 bg-[#f7fbff]">
      <h2>Lorem ipsum do cumque porro nam dolor!</h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map(({ title, description }) => {
          return <ServiceCard title={title} description={description} />;
        })}
      </div>
    </div>
  );
};

export default SerCards;
