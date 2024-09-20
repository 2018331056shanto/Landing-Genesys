import { react } from "react";

import Frame2Sub from "./Frame2Sub/Frame2Sub";

const Frame2 = () => {
  return (
    <div className="w-full relative flex  flex-wrap bg-[#F6F5F5]">
      <div
        className="relative  flex-wrap w-fit flex flex-col  h-fit 
           
              lg:p-28
            md:p-14
            sm:p-10
            xsm:p-6
            gap-[0px]
            
            overflow-hidden
            "
      >
        <div
          className="flex relative

        flex-col w-fit h-fit "
        >
          <div className="w-fit flex flex-col  gap-2 h-fit border-[1px]">
            <div
              className="flex font-montserrat font-[600] 
                        lg:text-7xl 
                        md:text-5xl
                        sm:text-4xl
                        xsm:text-2xl


                        leading-tight tracking-[.5px]"
            >
              BUY 1 GET 1 FREE
            </div>
            {/* <span className='font-montserrat felx font-[600] text-[70px] leading-[84px] tracking-[.5px]'>
                            
                        // </span> */}

            <div className="flex">
              <span
                className="flex font-montserrat font-[600] 
                            
                            lg:text-7xl
                            md:text-5xl
                            sm:text-4xl
                            xsm:text-2xl
                            
                            leading-tight tracking-[.5px]"
              >
                ON
              </span>
              <span
                style={{ WebkitTextStroke: "1px  black" }}
                className="flex  font-montserrat font-[600] 
                
                lg:text-7xl 
                md:text-5xl
                sm:text-4xl
                xsm:text-2xl
                

                leading-tight text-[#F6F5F5] tracking-[.5px] ml-1"
              >
                BEST SELLING PRODUCTS
              </span>
            </div>
          </div>
        </div>
        <div
          className="flex w-full h-auto relative justify-center 
              
          

              "
        >
          <Frame2Sub />
        </div>
      </div>
    </div>
  );
};

export default Frame2;
