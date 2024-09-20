import React from "react";
import dl from "../../asset/icon/delivery.png";
import su from "../../asset/icon/customer-support 1.svg";
import re from "../../asset/icon/exchange.svg";


const Frame10 = () => {
  return (
    <div className="flex w-full h-[352px] justify-center items-center bg-gradient-to-r from-[#EC3339] to-[#BB1117]">
      <div className="flex w-full h-fit  justify-between ">
        <div className="flex flex-col justify-between w-[329px] h-[152px]">
          <div className="flex w-[40px] h-[40px]">
            <img className="flex object-cover w-full h-full" src={dl} />
          </div>
          <div className="flex flex-col justify-between w-full h-[88px] ">
            <div className="flex w-[111px] h-[29px] justify-center items-center">
              <p className="flex font-montserrat font-[500] text-[24px] leading-[28.8] tracking-[.005em] text-white">
                Shipping
              </p>
            </div>
            <p className="flex text-white font-inter font-[400] text-[16px] leading-[24px] tracking-[.005em] ">
              The attention to detail is evident in every aspect of this
              backpack.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between w-[329px] h-[152px]">
          <div className="flex w-[40px] h-[40px]">
            <img className="flex object-cover w-full h-full" src={re} />
          </div>
          <div className="flex flex-col justify-between w-full h-[88px] ">
            <div className="flex w-[111px] h-[29px] justify-center items-center">
              <p className="flex font-montserrat font-[500] text-[24px] leading-[28.8] tracking-[.005em] text-white">
                Return
              </p>
            </div>
            <p className="flex text-white font-inter font-[400] text-[16px] leading-[24px] tracking-[.005em] ">
              The attention to detail is evident in every aspect of this
              backpack.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between w-[329px] h-[152px]">
          <div className="flex w-[40px] h-[40px]">
            <img className="flex object-cover w-full h-full" src={su} />
          </div>
          <div className="flex flex-col justify-between w-full h-[88px] ">
            <div className="flex w-[111px] h-[29px] justify-center items-center">
              <p className="flex font-montserrat font-[500] text-[24px] leading-[28.8] tracking-[.005em] text-white">
                Support
              </p>
            </div>
            <p className="flex text-white font-inter font-[400] text-[16px] leading-[24px] tracking-[.005em] ">
              The attention to detail is evident in every aspect of this
              backpack.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame10;
