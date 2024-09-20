import React from "react";
import Frame2Sub from "../Frame2/Frame2Sub/Frame2Sub";

const Frame6 = () => {
  return (
    <div className="flex flex-wrap  items-center w-full  min-h-screen  bg-[#F6F5F5]">
      <div
        className="flex 
      felx-col
      h-fit 
      flex-wrap

      pl-24
      
      lg:gap-28
      md:gap-20
      sm:gap-14
      xsm:gap-10
      "
      >
        <div
          className="flex justify-start
        flex-wrap
        
        w-fit
        h-fit
         "
        >
          <p
            className="flex uppercase font-montserrat font-[600] 
          
            lg:text-7xl
            md:text-5xl
            sm:text-4xl
            xsm:text-4xl
          
          leading-tight tracking-[.5px] text-[#060606]"
          >
            new arrival
          </p>
        </div>
        <div className="flex flex-wrap flex-grow w-full flex-center gap-[24px] ">
          <Frame2Sub className="flex flex-wrap" />
        </div>
      </div>
    </div>
  );
};

export default Frame6;
