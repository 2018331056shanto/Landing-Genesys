import { react } from "react";
import vector from "../../asset/icon/Vector.png";
import img5 from "../../asset/img/img (5).png";
const Frame4 = () => {
  return (
    <div className="flex relative w-[1920px] h-[577px] bg-gradient-to-r from-[#EC3339] to-[#BB1117]">
      <div className="flex  w-[1176px] h-[348px] top-[54px] left-[90px]">
        <div className="flex justify-between items-center   w-[221px]  h-[221px]">
          <div className="flex top-[30px] w-[93.3px]  h-[158.84px] ">
            <img className="flex  w-full h-full  opacity-[.16]" src={vector} />
          </div>
          <div className="flex  w-[93.3px] h-[158.84px] ">
            <img className="flex opacity-[.16]" src={vector} />
          </div>
        </div>
        <div className="flex flex-col absolute w-[1116px] h-[198px] top-[150px]  left-[60px]">
          <p className="uppercase flex font-montserrat font-[700] text-[47px] leading-[57.6px] tracking-[.005em] text-white">
            Our mission is to enlighten, entertain
          </p>
          <p className="uppercase flex font-montserrat font-[700] text-[47px] leading-[57.6px] tracking-[.005em] text-white">
            and empower current and future{" "}
          </p>
          <p className="uppercase flex font-montserrat font-[700] text-[47px] leading-[57.6px] tracking-[.005em] text-white">
            leaders around the world.{" "}
          </p>
        </div>
      </div>

      <div className="flex absolute w-[571px] h-[725px] top-[-148px] left-[1170px]">
        <img className="flex object-cover" src={img5} />
      </div>
    </div>
  );
};

export default Frame4;
