import {react} from 'react'

import arrow from '../../asset/icon/next (7) 1.png'
import img1 from '../../asset/img/img (1).png'
import img8 from '../../asset/img/img (8).png'
import signature from '../../asset/img/pat-signature White 1.png'
const Frame3=()=>{
  // absolute w-[549px] h-[351px] flex-col top-[133px] left-[150px]  gap-[48px]

  return (
    <div className="w-full flex flex-col relative  bg-[#111111]">
     <div className='w-full flex relative '>
      <div
        className="flex relative flex-col

        
            lg:w-[549px]
            md:w-[380px]
            sm:w-72
            xsm:w-44

            lg:h-96
            md:h-60
            sm:h-48
            xsm:h-44


            lg:pt-24
            md:pt-16
            sm:pt-12
            xsm:pt-8



            lg:pl-24
            md:pl-16
            sm:pl-11
            xsm:pl-5

            lg:gap-4
            md:gap-3
            sm:gap-2
            xsm:gap-1
            
            items-start
            
            
            "
      >
        <div
          className="flex relative  w-full h-fit font-montserrat text-white font-[600] 
        
        lg:text-4xl
        md:text-xl
        sm:text-lg
        xsm:text-xs
        
        leading-tight tracking-[.005px]"
        >
          PATRICK BET-DAVID'S
        </div>

        <div className="flex flex-col w-full h-fit ">
          <div className="flex  w-fit h-fit">
            <p
              className="w-full flex h-fit font-montserrat font-[700]
            
            lg:text-6xl
            md:text-4xl
            sm:text-2xl
            xsm:text-lg
            
            leading-tight tracking-[.5px] bg-gradient-to-b from-custom-red-start to-custom-red-end text-transparent bg-clip-text "
            >
              {" "}
              SIGNED
            </p>
          </div>

          <div className="flex w-full h-fit  ">
            <p
              className="w-full h-fit flex font-montserrat font-[700] 
            
            lg:text-6xl 
            md:text-4xl
            sm:text-2xl
            xsm:text-lg
            
            leading-tight tracking-[.5px] bg-gradient-to-b from-custom-red-start to-custom-red-end text-transparent bg-clip-text "
            >
              COLLECTION
            </p>
          </div>
        </div>

        <div
          className="flex relative 
          justify-start
        
        lg:top-7
        md:top-3
        sm:
        xsm:top-1

        rounded-[12px] bg-white"
        >
          <div
            className="
          
            
            flex 
            lg:w-32  
            md:w-24
            sm:w-20
            xsm:w-14

            lg:h-12

            justify-center
            items-center

           "
          >
            <p
              className="flex w-fit h-fit font-inter font-[500] 
            
              
               md:text-sm
               lg:text-lg
               sm:text-xs
               xsm:text-[8px]

               
           
            
            leading-tight tracking-[.005em] text-black"
            >
              SHOP NOW
            </p>
          </div>
          <div
            className="flex
            
            lg:w-7
            md:w-6
            sm:w-4
            xsm:w-2
           rounded-xl
           lg:pr-2
           md:pr-2
           
            justify-center items-center"
          >
            <img className="w-fit h-fit " src={arrow} />
          </div>
        </div>
      </div>

      <div
        className="flex
       
        
       w-fit
       h-fit

        justify-start
          "
      >
        <div
          className="flex   
        
         
        
    
      w-1/2
      
      lg:h-[588px]
      md:h-96
      sm:h-80
      xsm:h-56

      lg:pt-20
      md:pt-11
      sm:pt-8
      xsm:pt-6


        justify-center items-center "
        >
          <img className="flex object-fill  w-full h-full" src={img1} />
        </div>
        <div className="flex 
       
      
        w-[45%]
        lg:h-[550px]
        md:h-[350px]
        sm:h-[286px]
        xsm:h-48

        lg:pt-28
        md:pt-16
        sm:pt-12
        xsm:pt-9

        justify-start
        items-center">
          <img className="object-fill  w-full h-full" src={img8} />
        </div>
      </div>

      </div>

      <div className="flex relative
      
      w-[40%]
      h-fit
      
      lg:top-[-150px]
      md:top-[-100px]
      sm:top-[-80px]

      xsm:top-[-60px]
    
      
      ">
        <img className="flex 
        lg:pl-10 
        md:pl-10

        xsm:pl-5
        object-contain w-full h-full  opacity-[.8]" src={signature} />
      </div> 
    </div>
  );
}

export default Frame3