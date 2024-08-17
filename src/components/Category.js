import React from 'react'
import Category1 from '../assests/c1.jpeg'
import Category2 from '../assests/c2.jpeg'
import Category3 from '../assests/c3.jpeg'
import Category4 from '../assests/c4.jpeg'
import Category5 from '../assests/c5.jpeg'
import Button from './Button'
import Orange from '../Marker/Orange'
import Categorys from "./AllData.json";

const getImagePath = (path) => require(`../assests/${path}`);


const Category = () => {
    return (
        <>
            <div className="container mx-auto px-7 pt-20">
                <p className='text-lg font-medium '>{Categorys.category[0].title}</p>
                <h4 className='text-2xl font-bold pt-3 flex items-center'>{Categorys.category[0].title2} <Orange /> </h4>
            </div>
            <div className="container mx-auto px-7 flex items-center pt-5 gap-[65px]">
                <div className="w-4/4 ">
                    <article class="flex flex-col justify-between w-100 h-60 mx-auto bg-white rounded-md relative shadow-lg " >
                    <img src={getImagePath(Categorys.category[0].Category1)} alt="logo" className="" />
                    <div class="mt-auto w-full">
                            <div class="flex items-center justify-between px-4 w-full h-15 pb-3 bg-gray-200 rounded-b-md category">
                                <div>
                                    <p className='pt-3 text-[21px] text-white font-bold'>
                                    {Categorys.category[0].categoryt1}
                                    </p>
                                </div>
                                <div className="bg-white  mt-5 rounded-full h-10 w-30 flex justify-center border-2 border-[#FF9119] text-[#FF9119] items-center font-semibold hover:bg-blue-400 hover:text-white transition-all">
                                    <a href="/contact" className='text-xs p-2.5'>Read More</a>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="w-[141%] mb-[-228px]" >
                 
                    <div className="grid grid-cols-2 gap-4 h-full mt-93">
                        {/* First Column */}
                        <div className="flex justify-center items-center pt-15">
                            <article class="flex flex-col justify-between w-100  mx-auto  rounded-md relative shadow-lg " >
                                <img src={getImagePath(Categorys.category[0].Category2)}alt="logo" className="w-[300px] h-[220px]" />
                                <div class="w-full mt-[-54px]">
                                    <div class="flex items-center justify-between px-4 w-full h-15 pb-3  rounded-b-md ">
                                        <div>
                                            <p className='pt-3  text-white text-[20px] font-semibold'>
                                            {Categorys.category[0].categoryt2}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>

                        {/* Second Column */}
                        <div className="flex justify-center items-center">
                            <article class="flex flex-col justify-between w-100  mx-auto  rounded-md relative shadow-lg " >
                                <img src={getImagePath(Categorys.category[0].Category3)} alt="logo" className="w-[300px] h-[220px]" />
                                <div class=" w-full mt-[-54px]">
                                    <div class="flex items-center justify-between px-4 w-full h-15 pb-3  rounded-b-md ">
                                        <div>
                                            <p className='pt-3  text-white text-[20px] font-semibold'>
                                            {Categorys.category[0].categoryt3}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 h-full pt-93">
                        {/* Third Column */}
                        <div className="flex justify-center items-center ">
                            <article class="flex flex-col justify-between w-100  mx-auto mt-[43px] rounded-md relative shadow-lg " >
                                <img src={getImagePath(Categorys.category[0].Category4)} alt="logo" className="w-[300px] h-[220px]" />
                                <div class=" w-full mt-[-54px]">
                                    <div class="flex items-center justify-between px-4 w-full h-15 pb-3  rounded-b-md ">
                                        <div>
                                            <p className='pt-3  text-white text-[20px] font-semibold'>
                                            {Categorys.category[0].categoryt4}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>

                        {/* Fourth Column */}
                        <div className="flex justify-center items-center">
                            <article class="flex flex-col justify-between w-100  mx-auto mt-[43px] rounded-md relative shadow-lg " >
                                <img src={getImagePath(Categorys.category[0].Category5)} alt="logo" className="w-[300px] h-[220px]" />
                                <div class=" mt-[-54px]">
                                    <div class="flex items-center justify-between px-4 w-full h-15 pb-3  rounded-b-md ">
                                        <div>
                                            <p className='pt-3  text-white text-[20px] font-semibold'>
                                            {Categorys.category[0].categoryt5}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>

    )
}

export default Category