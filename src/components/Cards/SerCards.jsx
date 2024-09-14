import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "../../app/data";

const SerCards = () => {
  return (
    <div className="w-full h-auto px-4 pb-40 bg-[#f7fbff] md:px-16">
      <h2 className="text-3xl font-bold text-center pt-32 pb-5">Professional Plumber services Near Me</h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map(({ title, description }) => {
          return <ServiceCard title={title} description={description} />;
        })}
      </div>
    </div>
  );
};

export default SerCards;
