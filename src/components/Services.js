import React from 'react'
import Yellow from '../Marker/Yellow'
import Service from "./AllData.json";
const getImagePath = (path) => require(`../assests/${path}`);


const Services = () => {
  return (
    <>
    <div className="container mx-auto px-7 pt-309">
        <p className='text-lg font-medium '>{Service.service[0].title} </p>
        <h4 className='text-2xl font-bold pt-3 flex items-center'>{Service.service[0].title2}<Yellow /> </h4>
    </div>
    <div className="container mx-auto px-7 flex items-center pt-5 gap-[65px]">
        <div className="w-4/4 ">
            <div class="flex flex-col justify-between w-100 h-60 mx-auto bg-white rounded-md relative shadow-lg " >
                <img src={getImagePath(Service.service[0].service1)} alt="logo" className="w-[385px]" />
                <div class="mt-auto w-full">
                    <div class=" px-4 w-full h-15 pb-3 rounded-b-md bg-yellow-500 bg-opacity-60 backdrop-blur-sm -mt-71">
                        <div>
                            <p className='pt-3 text-xl font-semibold text-black'>
                            {Service.service[0].servicet1}
                            </p>
                            <p className='text-base font-normal'>  {Service.service[0].servicep1} </p>
                        </div>
                        <div className="bg-white  mt-2 rounded-full h-10 w-[113px] flex justify-center text-[#FF9119] items-center font-semibold hover:bg-blue-400 hover:text-white transition-all">
                            <a href="/contact" className='text-xs p-2.5 text-black'>Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-4/4 ">
            <div class="flex flex-col justify-between w-100 h-60 mx-auto bg-white rounded-md relative shadow-lg " >
                <img src={getImagePath(Service.service[0].service2)} alt="logo" className="w-[385px]" />
                <div class="mt-auto w-full">
                    <div class=" px-4 w-full h-15 pb-3 rounded-b-md bg-yellow-500 bg-opacity-60 backdrop-blur-sm -mt-71">
                    <div>
                            <p className='pt-3 text-xl font-semibold text-black'>
                            {Service.service[0].servicet2}
                            </p>
                            <p className='text-base font-normal'>  {Service.service[0].servicep2} </p>
                        </div>
                        <div className="bg-white  mt-2 rounded-full h-10 w-[113px] flex justify-center text-[#FF9119] items-center font-semibold hover:bg-blue-400 hover:text-white transition-all">
                            <a href="/contact" className='text-xs p-2.5 text-black'>Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="w-4/4 ">
            <div class="flex flex-col justify-between w-100 h-60 mx-auto bg-white rounded-md relative shadow-lg " >
                <img src={getImagePath(Service.service[0].service3)} alt="logo" className="w-[385px]" />
                <div class="mt-auto w-full">
                    <div class=" px-4 w-full h-15 pb-3 rounded-b-md bg-yellow-500 bg-opacity-60 backdrop-blur-sm -mt-71">
                    <div>
                            <p className='pt-3 text-xl font-semibold text-black'>
                            {Service.service[0].servicet3}
                            </p>
                            <p className='text-base font-normal'>  {Service.service[0].servicep3} </p>
                        </div>
                        <div className="bg-white  mt-2 rounded-full h-10 w-[113px] flex justify-center text-[#FF9119] items-center font-semibold hover:bg-blue-400 hover:text-white transition-all">
                            <a href="/contact" className='text-xs p-2.5 text-black'>Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
</>  )
}

export default Services