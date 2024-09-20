import React from "react";
import img1 from "../../asset/img/img (1).jpeg";
import img5 from "../../asset/img/img (5).jpeg";
const Frame7 = () => {

  const images=[img1,img5]
  return (
    <div
      className="flex relative flex-wrap  justify-start   w-full min-h-screen
    
    
    "
    >
      <div className="w-full flex relative justify-start">
        <div
          className="flex flex-wrap 
        

        w-1/3

        
        "
        >
          <div
            className="flex relative flex-wrap flex-col 
      
        w-fit 
        h-fit

        lg:gap-4
        md:gap-3
        sm:gap-2

        lg:pt-36
        md:pt-28
        sm:pt-24

        lg:pl-20
        md:pl-12
        sm:pl-8

      "
          >
            <p
              className="flex uppercase font-actRejection font-[400]
          
          lg:text-7xl 
          md:text-5xl 
          sm:text-4xl
          
          leading-tight  tracking-[12px] text-[#272312]"
            >
              future looks bright
            </p>

            <div
              className="flex flex-wrap 
          
          w-fit 
          h-fit 
          
          lg:gap-3

          "
            >
              <p
                className="flex uppercase font-montserrat italic font-[600]
            
            lg:text-5xl 
              md:text-3xl 
              sm:text-2xl

            leading-tight tracking-[.5px] text-[#7F1BCD]"
              >
                purple
              </p>
              <p
                className="flex font-montserrat italic 
            
            lg:text-5xl 
              md:text-3xl 
              sm:text-2xl
          
          leading-tight
            tracking-[.5px] text-[#272312]"
              >
                &
              </p>

              <p
                className="flex uppercase font-montserrat italic font-[600] 
              
              lg:text-6xl 
              md:text-3xl 
              sm:text-2xl
          
          leading-tight tracking-[.5px] text-[#E0A408]"
              >
                gold
              </p>
              <p
                style={{ WebkitTextStroke: "1px  #272312" }}
                className="flex uppercase font-montserrat bg-transparent italic font-[600] 
                lg:text-6xl 
              md:text-3xl 
              sm:text-2xl
          
          leading-tight
                tracking-[.5px] text-white"
              >
                series
              </p>
            </div>
          </div>
        </div>

        <div
          className="flex flex-wrap justify-center items-center
        flex-grow
         
        lg:gap-6
        md:gap-4
        sm:gap-2 
        
        lg:pr-10
        md:pr-8
        sm:pr-6

        lg:pt-28
        md:pt-24
        sm:pt-16


        lg:pl-28

        
        h-fit 
        
        "
        >
          {images.map((image, id) => {
            return (
              <div
                key={id}
                className="flex flex-col
            
             lg:w-96
             md:w-64
             sm:w-52

             h-fit 

            "
              >
                <img
                  className="flex object-cover w-full h-full  rounded-xl"
                  src={image}
                />

                <div
                  className="flex flex-col justify-between 
              
              w-fit 
              h-fit 
              gap-1 "
                >
                  <p
                    className="flex pl-2 text-[#060606] uppercase font-inter font-[600]
                
                lg:text-sm
                md:text-xs 
                sm:text-xs 
                 leading-tight  tracking-[.005em]"
                  >
                    flb shirt-purple
                  </p>

                  <div className="flex pl-2 w-fit h-fit">
                    <span
                      className="flex w-fit h-fit  font-inter font-[500]
                  
                  lg:text-lg
                  md:text-sm
                  sm:text-sm 
                  
                  leading-tight  tracking-[.005em] text-[#060606]"
                    >
                      $34.96
                    </span>

                    <span
                      className="flex w-fit h-fit  font-inter font-[500]
                    
                    lg:text-lg
                  md:text-sm
                  sm:text-sm 
                  leading-tight tracking-[.005em] line-through text-[#9B9B9B]"
                    >
                      $34.96
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>

    /*
    // <div className="flex justify-center items-center w-[1920px] h-[779px] bg-white">
    //   <div className="flex w-[1618px] items-center h-[579px] gap-[251px] ">
    //     <div className="flex items-center w-[351px] h-[506px]">
    //       <div className="flex flex-col w-[351px] h-[506px] gap-[24px]  ">
    //         <div className="flex  w-[340px] h-[350px]">
    //           <p className="flex uppercase font-actRejection font-[400] text-[99px] leading-[120px] tracking-[.5px] text-[#272312]">
    //             future looks bright
    //           </p>
    //         </div>
    //         <div className="flex  flex-wrap w-[351px] h-[132px] gap-[12px]">
    //           <p className="flex uppercase font-montserrat italic font-[600] text-[50px] leading-[60px] tracking-[.5px] text-[#7F1BCD]">
    //             purple
    //           </p>
    //           <p className="flex font-montserrat italic font-[275] text-[50px] leading-[60px] tracking-[.5px] text-[#272312]">
    //             &
    //           </p>
    //           <p className="flex uppercase font-montserrat italic font-[600] text-[50px] leading-[60px] tracking-[.5px] text-[#E0A408]">
    //             gold
    //           </p>
    //           <p
    //             style={{ WebkitTextStroke: "1px  #272312" }}
    //             className="flex uppercase font-montserrat bg-transparent italic font-[600] text-[49px] leading-[60px] tracking-[.5px] text-white"
    //           >
    //             series
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex w-[1016px] justify-between h-[579px] gap-[24px] ">
    //       <div className="flex flex-col justify-between w-[496px] h-[579px] ">
    //         <div className="flex flex-col  justify-center  w-[496px] h-[496px] rounded-[12px]">
    //           <img
    //             className="flex object-cover w-[496px] h-[496px] rounded-[12px]"
    //             src={img1}
    //           />
    //         </div>
    //         <div className="flex flex-col justify-between w-[176px] h-[59px] gap-[16px] ">
    //           <p className="flex pl-[8px] text-[#060606] uppercase font-inter font-[600] text-[16px] leading-[19.2px] tracking-[.005em]">
    //             flb shirt-purple
    //           </p>
    //           <div className="flex pl-[8px] w-full h-full">
    //             <span className="flex w-[75px] h-[24px] font-inter font-[500] text-[20px] leading-[24px] tracking-[.005em] text-[#060606]">
    //               $34.96
    //             </span>
    //             <span className="flex w-[75px] h-[24px] font-inter font-[500] text-[20px] leading-[24px] tracking-[.005em] line-through text-[#9B9B9B]">
    //               $34.96
    //             </span>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="flex flex-col justify-between w-[496px] h-[579px] ">
    //         <div className="flex flex-col  justify-center  w-[496px] h-[496px] rounded-[12px]">
    //           <img
    //             className="flex object-cover w-[496px] h-[496px] rounded-[12px]"
    //             src={img5}
    //           />
    //         </div>
    //         <div className="flex flex-col justify-between w-[176px] h-[59px] gap-[16px] ">
    //           <p className="flex pl-[8px] text-[#060606] uppercase font-inter font-[600] text-[16px] leading-[19.2px] tracking-[.005em]">
    //             flb shirt-purple
    //           </p>
    //           <div className="flex pl-[8px] w-full h-full">
    //             <span className="flex w-[75px] h-[24px] font-inter font-[500] text-[20px] leading-[24px] tracking-[.005em] text-[#060606]">
    //               $34.96
    //             </span>
    //             <span className="flex w-[75px] h-[24px] font-inter font-[500] text-[20px] leading-[24px] tracking-[.005em] line-through text-[#9B9B9B]">
    //               $34.96
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    */
  );
};

export default Frame7;
