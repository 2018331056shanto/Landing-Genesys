import { react } from "react";
import Valutainmen from "../../asset/logo/Valuetainment.svg";
import img11 from "../../asset/img/img (11).png";
import img9 from "../../asset/img/img (9).png";
import img10 from "../../asset/img/img (10).png";

const Frame1 = () => {
  const images = [img9, img10, img11, img9, img10];
  return (
    <div className="w-full relative flex min-h-[1320px] pt-7 flex-col flex-wrap bg-[#EA2127] ">
      <div
        className="
    

            lg:pl-16
            md:pl-8
            sm:pt-2
            xsm:pl-4




            lg:pt-10
            md:pt-4
            sm:pl-4
            xsm:pt-2

            relative  justify-start items-center  flex-shrink flex  w-fit h-32  gap-[10px]"
      >
        <div className="h-fit flex justify-center items-center w-fit">
          <div
            className=" 
                    lg:w-20
                    lg:h-24

                    md: w-12
                    md: h-14
                   
                    "
          >
            <img
              className="w-full h-full object-contain invert brightness-0"
              src={Valutainmen}
            />
          </div>
        </div>
        <div className="w-fit  flex-shrink flex h-fit">
          <div
            className="text-white  font-montserrat font-[800] items-center justify-center 
          
          lg:text-8xl
          md:text-5xl
          sm:text-5xl
          xsm:text-4xl

          tracking-wider"
          >
            VTMERCH
          </div>
        </div>
      </div>
      <div
        className="relative flex-shrink justify-center items-center  w-fit h-fit
      

       lg:pt-36
       md:pt-16
       sm:pt-12
       xsm:pt-12


       lg:pl-28
       md:pl-16
       sm:pl-28
       xsm:pl-28

      "
      >
        <span
          className="font-actRejection   overflow-auto w-fit h-fit flex-shrink flex font-[400] opacity-[.4] text-white  tracking-[.3px] 
      
        lg:text-9xl
        md:text-7xl
        sm:text-5xl
        xsm:text-4xl
        
        "
        >
          FUTURE LOOKS BRIGHTS
        </span>
      </div>
      <div
        className=" flex relative   
        
          
      
      lg:top-[-55px]
      xsm:top-[-20px]

      pl-8
      flex-wrap w-fit "
      >
        <div
          className="w-fit relative
          
        justify-evenly
         flex-wrap items-center flex pb-7 gap-4"
        >
          {images.map((image, k) => {
            return (
              <div
                key={k}
                className="
                lg:w-80
                md:w-72
                sm:w-60
                xsm:w-52 
                
                h-[400px]
                

              

                 relative flex flex-col  gap-[5px] rounded-[12px] "
              >
                {" "}
                <div className="flex relative w-full h-[397px] rounded-[12px]">
                  <img
                    className="relative w-full h-full object-cover rounded-[12px]"
                    src={image}
                  />
                </div>
                <div
                  className="flex-wrap  
                
                w-fit
                h-fit
                
                flex relative pl-2 flex-col "
                >
                  {" "}
                  <div className="w-full flex-wrap flex-col gap-3 flex">
                    <div className="flex  items-start">
                      <span
                        className="font-inter text-white flex font-[500]
                      

                      lg:text-xl
                      md:text-lg
                      sm:text-sm
                      xsm:text-xs

                      
                      leading-tight tracking-[0.005em] text-left"
                      >
                        Army Green Active Short Sleeve
                      </span>
                    </div>
                    <div className="flex w-fit h-fit gap-4">
                      <span
                        className="w-fit h-fit gap-[12px] font-inter 
                      
                       lg:text-xl
                      md:text-lg
                      sm:text-l
                      xsm:text-l

                      leading-tight tracking-[0.005em] text-white opacity-[.8]"
                      >
                        $ 34.95
                      </span>
                      <span
                        className="w-fit h-fit gap-[12px] font-inter 
                      
                       lg:text-xl
                      md:text-lg
                      sm:text-l
                      xsm:text-l

                      leading-tight tracking-[0.005em] text-white opacity-[.8] line-through"
                      >
                        $ 34.95
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Frame1;
