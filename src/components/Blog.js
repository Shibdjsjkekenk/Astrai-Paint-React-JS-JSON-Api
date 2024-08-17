import React from 'react'
import Green from '../Marker/Green'
import ourblog from "./AllData.json";

const getImagePath = (path) => require(`../assests/${path}`);


const Blog = () => {
  return (
    <>
    <div className="container mx-auto px-7 pt-24">
        <p className='text-lg font-medium '>{ourblog.blog[0].title} </p>
        <h4 className='text-2xl font-bold pt-3 flex items-center'>{ourblog.blog[0].title2} <Green /> </h4>
    </div>
    <div className="container mx-auto px-7 flex items-center pt-5 gap-[65px]">
        
        <div className="w-4/4 ">
            
            <div class="flex flex-col justify-between w-100 h-41 mx-auto bg-white rounded-md relative shadow-lg " >
                <img src={getImagePath(ourblog.blog[0].blog1)} alt="logo" className="w-[385px] h-[174px]" />
                <div class="mt-[-28px] w-full">
                    <div class=" px-4 w-full h-15 pb-3 rounded-b-md  -mt-71">
                        <div>
                            <p className='pt-3  text-sm font-medium text-white italic'>
                            {ourblog.blog[0].blogt1}
                            </p>
                            <p className='text-base  text-[17px] font-semibold text-white'>   {ourblog.blog[0].blogp1}<br></br> for your office </p>
                        </div>
                      
                    </div>
                </div>
            </div>

            <div class="flex flex-col justify-between w-100 h-41 mx-auto bg-white rounded-md relative shadow-lg mt-[38px] " >
                <img src={getImagePath(ourblog.blog[0].blog2)}alt="logo" className="w-[385px] h-[174px]" />
                <div class="mt-[-28px] w-full">
                    <div class=" px-4 w-full h-15 pb-3 rounded-b-md  -mt-71">
                    <div>
                            <p className='pt-3  text-sm font-medium text-white italic'>
                            {ourblog.blog[0].blogt2}
                            </p>
                            <p className='text-base  text-[17px] font-semibold text-white'>   {ourblog.blog[0].blogp2}<br></br> for your office </p>
                        </div>
                       
                    </div>
                </div>
            </div>

        </div>

        <div className="w-4/4 mt-[0px]">
            <div class="flex flex-col justify-between w-100 h-41 mx-auto bg-white rounded-md relative shadow-lg " >
                <img src={getImagePath(ourblog.blog[0].blog3)}alt="logo" className="w-[385px] h-[375px]" />
                <div class="mt-[-70px] w-full">
                    <div class=" px-4 w-full h-15 pb-3 rounded-b-md  -mt-71">
                    <div>
                            <p className='pt-3  text-sm font-medium text-white italic'>
                            {ourblog.blog[0].blogt3}
                            </p>
                            <p className='text-base  text-[17px] font-semibold text-white'>   {ourblog.blog[0].blogp3}<br></br> for your office </p>
                        </div>
                        <div className="bg-white  mt-2 rounded-full h-10 w-[113px] flex justify-center text-[#FF9119] items-center font-semibold hover:bg-blue-400 hover:text-white transition-all">
                            <a href="/contact" className='text-xs p-2.5 text-black'>Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-4/4 ">
            
            <div class="flex flex-col justify-between w-100 h-41 mx-auto bg-white rounded-md relative shadow-lg " >
                <img src={getImagePath(ourblog.blog[0].blog4)} alt="logo" className="w-[385px] h-[174px]" />
                <div class="mt-[-28px] w-full">
                    <div class=" px-4 w-full h-15 pb-3 rounded-b-md  -mt-71">
                    <div>
                            <p className='pt-3  text-sm font-medium text-white italic'>
                            {ourblog.blog[0].blogt4}
                            </p>
                            <p className='text-base  text-[17px] font-semibold text-white'>   {ourblog.blog[0].blogp4}<br></br> for your office </p>
                        </div>
                      
                    </div>
                </div>
            </div>

            <div class="flex flex-col justify-between w-100 h-41 mx-auto bg-white rounded-md relative shadow-lg mt-[38px] " >
                <img src={getImagePath(ourblog.blog[0].blog5)} alt="logo" className="w-[385px] h-[174px]" />
                <div class="mt-[-28px] w-full">
                    <div class=" px-4 w-full h-15 pb-3 rounded-b-md  -mt-71">
                    <div>
                            <p className='pt-3  text-sm font-medium text-white italic'>
                            {ourblog.blog[0].blogt5}
                            </p>
                            <p className='text-base  text-[17px] font-semibold text-white'>   {ourblog.blog[0].blogp5}<br></br> for your office </p>
                        </div>            
                    </div>
                </div>
            </div>

        </div>     
    </div>
</>  )
}

export default Blog