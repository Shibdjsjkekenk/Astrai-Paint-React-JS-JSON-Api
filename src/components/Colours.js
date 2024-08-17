import React from 'react'
import Service1 from '../assests/s1.jpeg'
import Service2 from '../assests/s2.jpeg'
import Service3 from '../assests/s3.jpeg'
import Green from '../Marker/Green'

const Colours = () => {
    return (
        <>
            <div className="container mx-auto px-7 pt-309 flex justify-between">
                <div>
                    <p className='text-lg font-medium '>Colours </p>
                    <h4 className='text-2xl font-bold pt-3 flex items-center'>Popular Colours<Green /> </h4>
                </div>
                <div>
                    <div class="bg-white border border-[#00AE44]  mt-2 rounded-full h-10 w-[113px] flex justify-center text-[#00AE44] items-center font-semibold hover:bg-blue-400 hover:text-white transition-all"><a href="/contact" class="text-xs p-2.5 text-custom-green">Read More</a></div>
                </div>
            </div>

            <div className="grid mb-[-143px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 px-10  flex items-center container mx-auto  pt-5 ">
                <div className="bg-[#FAE0B2] p-1 box-border border-2 border-white [190px] h-[158px]">
                    <div className="border-2 border-white h-full box-border p-4 text-center">
                    </div>
                    <p className='text-center pt-4 text-base font-normal'>Colour Name</p>
                    <p className="text-center text-xs font-normal text-gray-500">Colour Code</p>
                </div>

                <div className="bg-[#FBC9C3] p-1 box-border border-2 border-white [190px] h-[158px]">
                    <div className="border-2 border-white h-full box-border p-4 text-center">
                    </div>
                    <p className='text-center pt-4 text-base font-normal'>Colour Name</p>
                    <p className="text-center text-xs font-normal text-gray-500">Colour Code</p>
                </div>

                <div className="bg-[#00C1DE] p-1 box-border border-2 border-white [190px] h-[158px]">
                    <div className="border-2 border-white h-full box-border p-4 text-center">
                    </div>
                    <p className='text-center pt-4 text-base font-normal'>Colour Name</p>
                    <p className="text-center text-xs font-normal text-gray-500">Colour Code</p>
                </div>

                <div className="bg-[#0060AF] p-1 box-border border-2 border-white [190px] h-[158px]" >
                    <div className="border-2 border-white h-full box-border p-4 text-center">
                    </div>
                    <p className='text-center pt-4 text-base font-normal'>Colour Name</p>
                    <p className="text-center text-xs font-normal text-gray-500">Colour Code</p>
                </div>

                <div className="max-w-[200px] p-4 rounded-lg shadow-md bg-white text-center">
                    <p className="text-sm font-bold">Astral Paints</p>
                    <div className="relative my-4 w-full h-[100px] mx-auto">
                        <div className="absolute inset-0 border-2 border-red-500 rounded-lg"></div>
                        <div className="relative bg-[#800404] w-full h-full  p-[2px]">
                            <div className="w-full h-full border-2 border-white-500 "></div>
                        </div>
                    </div>
                    <p className='text-center pt-2 text-base font-normal'>Colour Name</p>
                    <p className="text-center text-xs font-normal text-gray-500">Colour Code</p>
                </div>
                
                <div className="bg-[#ECA628] p-1 box-border border-2 border-white [190px] h-[158px]">
                    <div className="border-2 border-white h-full box-border p-4 text-center">
                    </div>
                    <p className='text-center pt-4 text-base font-normal'>Colour Name</p>
                    <p className="text-center text-xs font-normal text-gray-500">Colour Code</p>
                </div>
            </div>


        </>)
}

export default Colours