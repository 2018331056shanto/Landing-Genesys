import React from "react";
import img1 from "../../asset/img/img (1).jpeg";
import img5 from "../../asset/img/img (5).jpeg";
const Frame7 = () => {
  return (
    <div className="flex justify-center items-center w-[1920px] h-[779px] bg-white">
      <div className="flex w-[1618px] items-center h-[579px] gap-[251px] ">
        <div className="flex items-center w-[351px] h-[506px]">
          <div className="flex flex-col w-[351px] h-[506px] gap-[24px]  ">
            <div className="flex  w-[340px] h-[350px]">
              <p className="flex uppercase font-actRejection font-[400] text-[99px] leading-[120px] tracking-[.5px] text-[#272312]">
                future looks bright
              </p>
            </div>
            <div className="flex  flex-wrap w-[351px] h-[132px] gap-[12px]">
              <p className="flex uppercase font-montserrat italic font-[600] text-[50px] leading-[60px] tracking-[.5px] text-[#7F1BCD]">
                purple
              </p>
              <p className="flex font-montserrat italic font-[275] text-[50px] leading-[60px] tracking-[.5px] text-[#272312]">
                &
              </p>
              <p className="flex uppercase font-montserrat italic font-[600] text-[50px] leading-[60px] tracking-[.5px] text-[#E0A408]">
                gold
              </p>
              <p
                style={{ WebkitTextStroke: "1px  #272312" }}
                className="flex uppercase font-montserrat bg-transparent italic font-[600] text-[49px] leading-[60px] tracking-[.5px] text-white"
              >
                series
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-[1016px] justify-between h-[579px] gap-[24px] ">
          <div className="flex flex-col justify-between w-[496px] h-[579px] ">
            <div className="flex flex-col  justify-center  w-[496px] h-[496px] rounded-[12px]">
              <img
                className="flex object-cover w-[496px] h-[496px] rounded-[12px]"
                src={img1}
              />
            </div>
            <div className="flex flex-col justify-between w-[176px] h-[59px] gap-[16px] ">
              <p className="flex pl-[8px] text-[#060606] uppercase font-inter font-[600] text-[16px] leading-[19.2px] tracking-[.005em]">
                flb shirt-purple
              </p>
              <div className="flex pl-[8px] w-full h-full">
                <span className="flex w-[75px] h-[24px] font-inter font-[500] text-[20px] leading-[24px] tracking-[.005em] text-[#060606]">
                  $34.96
                </span>
                <span className="flex w-[75px] h-[24px] font-inter font-[500] text-[20px] leading-[24px] tracking-[.005em] line-through text-[#9B9B9B]">
                  $34.96
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between w-[496px] h-[579px] ">
            <div className="flex flex-col  justify-center  w-[496px] h-[496px] rounded-[12px]">
              <img
                className="flex object-cover w-[496px] h-[496px] rounded-[12px]"
                src={img5}
              />
            </div>
            <div className="flex flex-col justify-between w-[176px] h-[59px] gap-[16px] ">
              <p className="flex pl-[8px] text-[#060606] uppercase font-inter font-[600] text-[16px] leading-[19.2px] tracking-[.005em]">
                flb shirt-purple
              </p>
              <div className="flex pl-[8px] w-full h-full">
                <span className="flex w-[75px] h-[24px] font-inter font-[500] text-[20px] leading-[24px] tracking-[.005em] text-[#060606]">
                  $34.96
                </span>
                <span className="flex w-[75px] h-[24px] font-inter font-[500] text-[20px] leading-[24px] tracking-[.005em] line-through text-[#9B9B9B]">
                  $34.96
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame7;
