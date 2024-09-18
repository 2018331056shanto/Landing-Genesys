import {react} from 'react'

import arrow from '../../asset/icon/arrow.jpg'
import img1 from '../../asset/img/img (1).png'
import img8 from '../../asset/img/img (8).png'
import signature from '../../asset/img/pat-signature White 1.png'
const Frame3=()=>{

    return(

        <div className='w-[1920px] flex relative h-[852px] bg-[#111111]'>

            <div className='flex  absolute w-[549px] h-[351px] flex-col top-[133px] left-[150px]  gap-[48px]'>

            <div className='flex  w-full h-[59px] font-montserrat text-white font-[500] text-[48px] leading-[58.8px] tracking-[.005px]'>
           PATRICK BET-DAVID'S
           </div>


                <div className='flex flex-col w-[479px] h-[176px] gap-[8px]'>

                <div className='flex  w-[286px] h-[84px]'>
                    <p className='w-full flex h-full font-montserrat font-[700] text-[70px] leading-[84px] tracking-[.5px] bg-gradient-to-b from-custom-red-start to-custom-red-end text-transparent bg-clip-text '> SIGNED</p>

                </div>
                
                <div className='flex w-[479px] h-[84px] '>
                    <p className='w-full h-full flex font-montserrat font-[700] text-[70px] leading-[84px] tracking-[.5px] bg-gradient-to-b from-custom-red-start to-custom-red-end text-transparent bg-clip-text '>COLLECTION</p>

                </div>
                    
                </div>

                <div className='flex justify-center items-center w-[186px] h-[52px] rounded-[12px] gap-[12px] pt-[16px] pr-[32px] pb-[16px] pl-[32px] bg-white'>

                <div className='flex w-[90px] h-[19px]'>
                    <p className='flex w-full h-full font-inter font-[500] text-[16px] leading-[19.2px] tracking-[.005em] text-black'>SHOP NOW</p>

                </div>
                <div className='flex w-[18.33px] h-[13.33px] top-[3.34px] left-[.83px]'>
                    <img className='w-[18.33px]  flex h-[13.33px] object-fill ' src={arrow}/>
                </div>

                </div>
            </div>

            <div className='flex absolute justify-center items-center w-[798px] h-[588px] top-[101px] left-[960px] gap-[24px] '>
                <div className='flex w-[370px] h-[588px] justify-center items-center '>
                   
                    <img className='flex object-cover w-full h-full' src={img1}/>

                </div>
                <div className='flex w-[404px] h-[518px] justify-start'>
                    <img src={img8}/>

                </div>
            </div>

            <div className='flex absolute w-[754px] h-[223px] top-[535px] left-[121px]'>
                <img className='flex object-contain opacity-[.3]' src={signature}/>
            </div>

        </div>
    )

}

export default Frame3