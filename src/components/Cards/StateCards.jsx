import React from "react";
import StateCard from "./StateCard";
import { StateData } from "../../app/StateData";

const StateCards = ({state}) => {
  return (
    <div className="pb-40  px-5 bg-[#ffffff]">
      <h2 className="text-4xl font-bold tracking-wide leading-normal  pt-32 pb-5">
      Serving Plumber services Nation Wide
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {
                StateData.map(({state}) =>{
                    return <StateCard state={state}/>;
                }
            )
            }
  
</div>

    </div>
  );
};

export default StateCards;
