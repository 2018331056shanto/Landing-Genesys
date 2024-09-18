import React from "react";
import Frame2Sub from "../Frame2/Frame2Sub/Frame2Sub";

const Frame6 = () => {
  return (
    <div className="flex justify-center items-center w-[1920px]  h-[790px] bg-[#F6F5F5]">
      <div className="flex w-[1618px] flex-col h-[590px]  gap-[90px] ">
        <div className="flex justify-center w-[527px] h-[84px] gap-[343px] ">
        <p className="flex uppercase font-montserrat font-[600] text-[69px] leading-[84px] tracking-[.5px] text-[#060606]">
    new arrival
        </p>
        </div>
        <div className="flex w-full h-[458px] gap-[24px] bg-slate-400">
            <Frame2Sub/>
        </div>
      </div>
    </div>
  );
};

export default Frame6;
