import React from 'react';
import logo from '../assests/astral.png'
const Header = () => {
    return (
        <>
            <header className="w-full h-20 bg-[#0060AF] shadow-lg flex items-center">
                <div className="container mx-auto px-7 flex items-center justify-between">
                    <div className="font-extrabold text-4xl text-white"> <img src={logo} alt="logo" className="w-40 h-50" /></div>
                    <div className="flex items-center space-x-8 text-center text-white tracking-wide">
                        <div className="hover:border-b-4 border-blue-400 cursor-pointer transition-all">
                            <a href="/" className='text-base'>About</a>
                        </div>
                        <div className="hover:border-b-4 border-blue-400 cursor-pointer transition-all">
                            <a href="/about" className='text-base'>Category</a>
                        </div>
                        <div className="hover:border-b-4 border-blue-400 cursor-pointer transition-all">
                            <a href="/resume" className='text-base'>Services</a>
                        </div>
                        <div className="hover:border-b-4 border-blue-400 cursor-pointer transition-all">
                            <a href="/portfolio" className='text-base'>Colours</a>
                        </div>
                        <div className="hover:border-b-4 border-blue-400 cursor-pointer transition-all">
                            <a href="/portfolio" className='text-base'>Downloads</a>
                        </div>
                        <div className="hover:border-b-4 border-blue-400 cursor-pointer transition-all">
                            <a href="/portfolio" className='text-base'>Become a dealer</a>
                        </div>
                        <div className="hover:border-b-4 border-blue-400 cursor-pointer transition-all">
                            <a href="/portfolio" className='text-base'>Blogs</a>
                        </div>
                        <div className="hover:border-b-4 border-blue-400 cursor-pointer transition-all">
                            <a href="/portfolio" className='text-base'>Contact</a>
                        </div>
                        <div className="bg-white text-blue-800 rounded-full h-10 w-36 flex justify-center items-center font-semibold hover:bg-blue-400 hover:text-white transition-all">
                            <a href="/contact">Enquire Now</a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
