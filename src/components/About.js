import React from 'react'
import Red from '../Marker/Red'
import Button from './Button'
import homeabt from "./AllData.json";

const getImagePath = (path) => require(`../assests/${path}`);


const About = () => {
  return (
    <>
      <div className="container mx-auto px-7 flex items-center justify-between gap-[65px] -mt-[244px]">
       
        <div className="w-4/4 mt-[146px]">
          <p className='text-lg font-medium '>{homeabt.about[0].title}</p>
          <h4 className='text-2xl font-bold pt-3 flex items-center'>{homeabt.about[0].title2} <Red /> </h4>
          <p className='text-base font-light pt-3'>{homeabt.about[0].para1}</p>
          <p className='text-base font-light pt-3'>{homeabt.about[0].para2}</p>
          <Button />
        </div>

        <div className="w-2/4  w-[169%] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${getImagePath(homeabt.about[0].img1)})` }}>
          {/* icon inside  */}
          <div className='flex justify-center items-center'>
            <img src={getImagePath(homeabt.about[0].playicon)} alt="logo" className="w-20 h-20 m-[240px]" />
          </div>
        </div>

      </div>

    </>
  )
}

export default About