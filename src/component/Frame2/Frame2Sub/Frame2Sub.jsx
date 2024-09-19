import { react } from "react";
import img4 from "../../../asset/img/img (4).jpeg";
import img6 from "../../../asset/img/img (6).jpeg";
import img10 from "../../../asset/img/img (10).jpeg";

const Frame2Sub = () => {
  const images = [img4, img6, img10, img4,img4, img6, img10, img4];
  return (
    <div
      className="flex w-full   relative flex-wrap   rounded-[12px]
    
    justify-evenly


    lg:top-20
    md:top-14
    sm:top-12
    xsm:top-10

    gap-3

    "
    >
      {images.map((image, id) => {
        return (
          <div
            key={id}
            className="flex flex-col 
            lg:w-80            
            md:w-72
            sm:w-60
            xsm:w-60

            lg:h-96 
            md:h-80
            sm:h-72
            xsm:h-72

            





            pt-4
            pr-4
            pb-6
            // pl-4

            justify-center items-center
            rounded-xl gap-1  shadow-custom"
          >
            <div
              className="flex
              w-full
              h-auto
            
            relative "
            >
              <img
                className="object-cover relative w-full h-auto rounded-[8px]"
                src={image}
              />
            </div>

            <div
              className="
            w-fit
            h-fit
            
            flex "
            >
              <div
                className="flex flex-col
              
              w-fit h-fit
              gap-2 "
              >
                <div className="flex  font-inter font-[600] 
                
                lg:text-lg
                md:text-sm
                sm:text-xs
                xsm:text-xs
                leading-tight tracking-[.005em] text-[#060606]">
                  Army Green Active Short Sleeve
                </div>
                <div className="flex w-fit h-fit  gap-3">
                  <span className="flex w-fit h-fit font-inter font-[500]   text-l leading-tight tracking-[.005em] text-[#060606]">
                    $34.96
                  </span>
                  <span className="flex w-fit h-fit font-inter font-[500] text-l leading-tight tracking-[.005em] line-through text-[#9B9B9B]">
                    $34.96
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Frame2Sub;
