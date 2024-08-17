import React from 'react'
import Joins from "./AllData.json";

const getImagePath = (path) => require(`../assests/${path}`);


const Join = () => {
    return (
        <div className=" flex items-center justify-between gap-[65px] mt-64">

            <div className="w-2/4  w-[169%] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${getImagePath(Joins.join[0].bg)})` }}>
                <div className='text-center my-[78px]'>
                    <p className='text-lg font-medium text-white'> {Joins.join[0].para1}</p>
                    <p className='text-3xl font-bold text-white pt-2'>{Joins.join[0].para2}</p>
                    <p className='text-sm font-normal text-white pt-2'>{Joins.join[0].para3}</p>
                    <p className='text-sm font-normal text-white pt-2'>{Joins.join[0].para4}</p>

                    <div className='flex justify-center pt-2'>
                        <div className="bg-white  mt-2 rounded-full h-10 w-[113px] flex justify-center text-[#FF9119] items-center font-semibold hover:bg-blue-400 hover:text-white transition-all">
                            <a href="/contact" className='text-xs p-2.5 text-black'>Read More</a>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default Join