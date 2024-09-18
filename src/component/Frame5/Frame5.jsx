import React from "react";

import logo from "../../asset/logo/Valuetainment.svg";
import arrow from "../../asset/icon/Vector (1).png";
import img3 from '../../asset/img/img (3).jpeg'
import img7 from "../../asset/img/img (7).png";
import img2 from "../../asset/img/img (2).png";
import img8 from '../../asset/img/img (8).jpeg'

import img2j from "../../asset/img/img (2).jpeg";
import img9j from "../../asset/img/img (9).jpeg";





const Frame5 = () => {
  return (
    <div className="relative flex w-[1920px] h-[1169px] bg-gradient-to-b from-[#2C2A2A] to-[#000000] ">
      <div className="flex w-[1230px] h-[872px]">
        <div className="flex absolute  justify-center items-center top-[-41px] left-[-124px] w-[926px] h-[926px] bg-transparent ">
          <div className="flex  w-[640.57px] h-[792.55px] ">
            <img src={logo} />
          </div>
        </div>
        <div className="flex absolute w-[1601px]  flex-col h-[873px] top-[148px] left-[154px] gap-[23px]">
          <div className="flex relative flex-col w-[475px] h-[168px] bordder-[1px]">
            <p className="flex uppercase font-montserrat text-white font-[600] text-[70px] leading-[84px] tracking-[.5px]">
              shop
            </p>
            <p
              style={{ WebkitTextStroke: "1px  white" }}
              className="flex uppercase text-transparent font-montserrat font-[600] text-[70px] leading-[84px] tracking-[.5px] "
            >
              collection
            </p>
          </div>

          <div className="flex relative flex-col gap-[33px]   w-[1601px] h-[699px]  ">
            <div className="flex relative w-[171px] h-[52px] top-[35px]  rounded-[12px]  gap-[12px]">
              <div className="flex h-full w-full rounded-[12px] pt-[16px] pl-[32px] gap-[12px] pb-[16px] pr-[32px]   bg-[#EDE8E1]   ">
                <p className="flex  uppercase font-inter font-[500] text-[16px] leading-[19.2px] tracking-[.005em] ">
                  view all
                </p>
                <div className="flex relative w-[18.33px] left-[.83px] top-[3.34px] h-[13.33px]">
                  <img src={arrow} />
                </div>
              </div>
            </div>
            <div className="flex relative  justify-around top-[-35px]  w-[1151px] h-[531px] ">
              <div className="flex   shadow-custom relative w-[371px] h-[531px] top-[116px]  rounded-[12px] bg-gradient-to-t from-[#c9c6c6] to-white">
                <img
                  className="flex rounded-[12px]   w-full h-full object-cover mix-blend-multiply "
                  src={img3}
                />
                <div className="flex flex-col justify-center gap-[5px]  absolute w-[233.11px] h-[77.09px] top-[440px] left-[20.49px]">
                  <p className="flex uppercase  font-montserrat font-[700] text-[32px] leading-[28.4px] tracking-[.005em] text-white">
                    the boss
                  </p>
                  <p className="flex uppercase  font-montserrat font-[700] text-[32px] leading-[28.4px] tracking-[.005em] text-white">
                    Collection
                  </p>
                </div>
              </div>

              <div className="flex relative flex-col  w-[424px] h-[600.33px] top-[48px]  gap-[28px] ">
                <div className="flex w-full justify-center items-center h-[282.67px] rounded-[12px] bg-gradient-to-t  from-[#c9c6c6] to-white">
                  <img
                    className="flex w-full h-full rounded-[12px] mix-blend-multiply object-cover "
                    src={img7}
                  />
                  <div className="flex flex-col justify-center  absolute w-[194px] h-[25px] top-[240.97px] left-[20.49px]">
                    <p className="flex uppercase  font-montserrat font-[700] text-[32px] leading-[38.4px] tracking-[.005em] text-white">
                      headw
                    </p>
                    <p className="flex uppercase  font-montserrat font-[700]  text-[32px] leading-[38.4px] tracking-[.005em] text-white">
                      Ear
                    </p>
                  </div>
                </div>
                <div className="flex w-full justify-center items-center h-[292.67px] rounded-[12px] bg-gradient-to-t  from-[#c9c6c6] to-white">
                  <img
                    className="flex w-full h-full rounded-[12px] mix-blend-multiply object-cover "
                    src={img2}
                  />

                  <div className="flex flex-col justify-center  absolute w-[246px] h-[38px] top-[547.64px]  left-[20.49px]">
                    <p className="flex uppercase  font-montserrat font-[700] text-[32px] leading-[38.4px] tracking-[.005em] text-white">
                      value books
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex relative rounded-[12px]  w-[300px] h-[699px] top-[-50px] bg-gradient-to-t from-[#c9c6c6] to-white shadow-custom ">
                <img
                  className="flex w-full h-full  rounded-[12px] object-cover mix-blend-multiply"
                  src={img8}
                />
                <div className="flex flex-col justify-center  absolute w-[238px] h-[38px] top-[645.06px]  left-[20.49px]">
                  <p className="flex uppercase  font-montserrat font-[700] text-[32px] leading-[38.4px] tracking-[.005em] text-white">
                    accessories
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex  w-[371px] h-[531px]  rounded-[12px] bg-gradient-to-t from-[#1C1C1C] to-white"></div> */}
        </div>
      </div>
      <div className="flex flex-col justify-between  relative left-[90px] top-[149px] w-[424px] h-[889px] rounded-[12px] ">
        <div className="flex bg-gradient-to-b from-[#c9c6c6] to-[#d3d0d0] w-[424px] h-424px] rounded-[12px]">
          <img
            className="flex w-full h-full mix-blend-multiply rounded-[12px]  "
            src={img2j}
          />
          <div className="flex flex-col justify-center  absolute w-[391px] h-[76px] top-[331px]  left-[21px]">
            <p className="flex uppercase  font-montserrat font-[700] text-[32px] leading-[38.4px] tracking-[.005em] text-white">
              the future looks bright collection
            </p>
          </div>
        </div>

        <div className="flex bg-gradient-to-b from-[#c9c6c6] to-[#d3d0d0] w-[424px] h-424px] rounded-[12px]">
          <img
            className="flex w-full h-full mix-blend-multiply rounded-[12px]  "
            src={img9j}
          />
          <div className="flex flex-col justify-center  absolute w-[91px] h-[38px] top-[815px]  left-[21px]">
            <p className="flex uppercase  font-montserrat font-[700] text-[32px] leading-[38.4px] tracking-[.005em] text-white">
    tops
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame5;
