import { react } from "react";
import vector from "../../asset/icon/Vector.png";
import img5 from "../../asset/img/img (5).png";
const Frame4 = () => {
  const massages = [
    " Our mission is to enlighten, entertain",
    "and empower current and future ",
    "leaders around the world.",
  ];
  return (
    <div className="flex relative w-full flex-wrap min-h-[571px] justify-between bg-gradient-to-r from-[#EC3339] to-[#BB1117]">
      <div className="flex relative w-1/2 flex-col ">
        <div className="flex  w-fit h-fit pl-[4.5%] pt-[3%]">
          <div
            className="flex 
        
                      lg:w-56
                      md:w-40
                      sm:w-32
                      xsm:w-24
      

        
                      lg:h-56
                      md:h-40
                      sm:h-32
                      xsm:h-24



      
          justify-between items-center "
          >
            <div className="flex w-fit h-fit">
              <img
                className="flex w-full h-full object-cover opacity-[.4]"
                src={vector}
              />
            </div>
            <div className="flex w-fit h-fit ">
              <img
                className="flex  w-full h-full  object-contain opacity-[.4]"
                src={vector}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          {massages.map((massage, id) => {
            return (
              <div
                key={id}
                className="flex flex-col relative

                            
                            w-screen 

                            lg:pt-3

                            lg:h-12
                            md:h-10
                            sm:h-7
                            xsm:h-6

                            
                            lg:pl-16
                            md:pl-12
                            sm:pl-8
                            xsm:pl-6

                            lg:gap-4

                            lg:top-[-60px]
                            md:top-[-35px]
                            sm:top-[-25px]
                            xsm:top-[-16px]
        "
              >
                <p
                  key={id}
                  className="uppercase absolute font-montserrat font-[700] 
                              
                              
                              lg:p-2

                              lg:text-[33px]
                              md:text-2xl
                              sm:text-lg 
                              xsm:text-xs

                              
                            leading-tight  tracking-[.005em] text-white"
                >
                  {massage}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="flex

                flex-wrap
                    w-1/2
      
                  relative"
      >
        <div
          className="flex absolute   

                  flex-wrap
                    lg:top-[-160px]
                    md:top-[-140px]
                    sm:top-[-90px]
                    xsm:top-[-60px]
    "
        >
          <img className="flex w-full h-full  object-contain " src={img5} />
        </div>
      </div>
    </div>
  );
};

export default Frame4;
