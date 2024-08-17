import React, { useEffect, useState } from 'react';
import banner from "./AllData.json";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const getImagePath = (path) => require(`../assests/${path}`);


const Slider = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const desktopImages = [
        getImagePath('slider-1.jpeg'),
        getImagePath('slider-2.jpeg')
    ];

    const imageTexts = [
        <>
            <p className=" font-bold text-[50px] leading-[55px] pt-[100px]" >{banner.slider[0].title1}  <br></br>{banner.slider[0].title2} </p>
            <p className="font-normal text-base leading-5 pt-5">{banner.slider[0].para1}</p>
            <div class="bg-white  mt-5 rounded-full h-10 w-[113px] flex justify-center text-[#FF9119] items-center font-semibold hover:bg-blue-400 hover:text-white transition-all"><a href="/contact" class="text-xs p-2.5 text-black">Read More</a></div>
        </>,
        <>
             <p className=" font-bold text-[50px] leading-[55px] pt-[100px]" >{banner.slider[0].title1}  <br></br>{banner.slider[0].title2} </p>
             <p className="font-normal text-base leading-5 pt-5">{banner.slider[0].para1}</p>
             <div class="bg-white  mt-5 rounded-full h-10 w-[113px] flex justify-center text-[#FF9119] items-center font-semibold hover:bg-blue-400 hover:text-white transition-all"><a href="/contact" class="text-xs p-2.5 text-black">Read More</a></div>
        </>,
    ];

    const nextImage = () => {
        if (desktopImages.length - 1 > currentImage) {
            setCurrentImage(prev => prev + 1);
        }
    };

    const prevImage = () => {
        if (currentImage !== 0) {
            setCurrentImage(prev => prev - 1);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (desktopImages.length - 1 > currentImage) {
                nextImage();
            } else {
                setCurrentImage(0);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [currentImage]);

    return (
        <div className='mx-auto rounded'>
            <div className='h-full md:h-full w-full bg-slate-200 relative'>
                <div className='absolute z-10 h-full w-full md:flex items-center hidden'>
                    <div className='flex justify-between w-full text-2xl'>
                        <button onClick={prevImage} className='bg-white shadow-md rounded-full p-1'>
                            <FaAngleLeft />
                        </button>
                        <button onClick={nextImage} className='bg-white shadow-md rounded-full p-1'>
                            <FaAngleRight />
                        </button>
                    </div>
                </div>

                {/* Desktop and tablet version slider */}
                <div className='hidden md:flex h-full w-full overflow-hidden'>
                    {desktopImages.map((imageUrl, index) => (
                        <div
                            className='w-full h-full min-w-full min-h-full transition-all relative'
                            key={index}
                            style={{ transform: `translateX(-${currentImage * 100}%)` }}
                        >
                            <img src={imageUrl} className='w-full h-full' alt={`Slide ${index}`} />
                            <div className="absolute top-10 left-10 text-white">
                                {imageTexts[index]}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Slider;
