import {react} from 'react'

import Frame2Sub from './Frame2Sub/Frame2Sub'


const Frame2=()=>{

    return(
        <div className=' flex justify-center items-center w-[1920px] h-[877px] top-[890px] bg-[#F6F5F5]'>

            <div className='w-[1618px] flex flex-col  h-[674px] top-[101px] left-[148px] gap-[48px] '>
                <div className='flex flex-col w-[1088px] h-[168px] gap-[343px] '>
                    <div className='w-full flex flex-col  h-full border-[1px]'>
                        <div className='flex font-montserrat font-[600] text-[70px] leading-[84px] tracking-[.5px]'>

                            BUY 1 GET 1 FREE 
                            </div>
                        {/* <span className='font-montserrat felx font-[600] text-[70px] leading-[84px] tracking-[.5px]'>
                            
                        // </span> */}
                        
                        <div className='flex'>
                            <span className='flex font-montserrat font-[600] text-[70px] leading-[84px] tracking-[.5px]'>ON</span>
                            <span style={{WebkitTextStroke:'1px  black'}} className='flex  font-montserrat font-[600] text-[70px] leading-[84px] text-[#F6F5F5] tracking-[.5px]'>BEST SELLING PRODUCTS</span>
                        </div>

                    </div>
                    
                </div>

                <Frame2Sub/>



                    
            </div>
        </div>
    )
}

export default Frame2