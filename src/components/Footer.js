import React from 'react'
import Footerbg from '../assests/footer-bg.jpeg'
import Logo1 from '../assests/1.png'
import Logo2 from '../assests/2.png'
import Logo3 from '../assests/3.png'
import Logo4 from '../assests/4.png'
import Logo5 from '../assests/5.png'
import logo from '../assests/astral.png'
import Location from '../assests/location.png'
import Phone from '../assests/phone-call.png'
import Gmail from '../assests/mail.png'
import Facebook from '../assests/facebook.png'
import Instagram from '../assests/instagram.png'
import Youtube from '../assests/youtube.png'
import Twitter from '../assests/twitter.png'

const Footer = () => {
    return (
        <>

            <div className=" flex items-center justify-between gap-[65px] mt-40 mb-0">
                <div className="w-2/4  w-[169%] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Footerbg})` }}>           
                   <div className='text-center my-[60px]'>
                        <p className='text-3xl font-bold text-white pt-2'> Group Company</p>
                        <div className='flex justify-center gap-[33px] pt-8 pb-8'>
                            <img src={Logo1} alt="logo" className="w-40 h-50" />
                            <img src={Logo2} alt="logo" className="w-40 h-50" />
                            <img src={Logo3} alt="logo" className="w-40 h-50" />
                            <img src={Logo4} alt="logo" className="w-40 h-50" />
                            <img src={Logo5} alt="logo" className="w-40 h-50" />
                        </div>
                        <div className="w-[1206px] ml-[62px]">
                            <hr />
                        </div>
                        <div className='my-[78px] pl-[451px] mt-[51px] mb-[26px] flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4'>
                            <div className='flex flex-col items-center lg:items-start space-y-2 lg:space-y-0'>
                                <p className='text-base font-bold text-white text-center lg:text-left'>Sign up to our newsletter</p>
                                <p className=' font-bold text-center lg:text-left text-xs text-custom-yellow'>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className='hidden lg:flex items-center max-w-sm border rounded-full focus-within:shadow pl-2'>
                                <input type="text" name='email' placeholder="Enter Email Address" className='w-full outline-none px-2 py-1 bg-transparent h-[44px] w-[279px] pl-[19px]' />
                                <div className=' cursor-pointer min-w-[50px] text-[12px] w-[135px] h-11 bg-[#0060AF] text-xs p-3.5 rounded-full flex items-center justify-center rounded-r-full text-white'>
                                    Enquire Now
                                </div>
                            </div>
                        </div>


                        <div className="flex px-8">
                            <div className="w-2/5 p-4 mt-[-85px]">
                                <div>
                                    <img src={logo} alt="logo" className="w-40 h-50" />

                                </div>
                                <p className='text-sm font-bold text-white float-left pt-5'>Reach us</p>
                                <div className='pt-[40px] flex float-left items-center gap-x-23'>
                                    <div>
                                        <img src={Location} alt="logo" className="w-8 h-7" />

                                    </div>
                                    <div>
                                        <p class="text-left text-sm font-normal text-white">417/418, 11th Cross, 4th Phase, Peenya Industrial Area, Bangalore - 560 058</p>
                                    </div>
                                </div>

                                <div className='pt-[24px] flex float-left items-center gap-x-23'>
                                    <div>
                                        <img src={Phone} alt="logo" className="w-7 h-7" />

                                    </div>
                                    <div>
                                        <p class="text-left text-sm font-normal text-white"><a href='tel:918042552555'>+91–80–42552555</a> </p>
                                    </div>
                                </div>

                                <div className=' pt-[74px] ml-[-177px] flex float-left items-center gap-x-23'>
                                    <div>
                                        <img src={Gmail} alt="logo" className="w-7 h-7" />

                                    </div>
                                    <div>
                                        <p class="text-left text-sm font-normal text-white"><a href='mailto:info@gem-paints.com'>info@gem-paints.com</a> </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-3/5 p-4 flex space-x-4 ">

                                <div className="flex-1 p-2">
                                    <p className="text-[17px] font-bold text-[#EEDCB2] text-left pl-5">About</p>
                                    <ul className="pl-[20px]">
                                        <li className="text-sm font-semibold text-white pt-3 text-left pl-0">About astral</li>
                                        <li className="text-sm font-semibold text-white pt-2 text-left pl-0">Paint journey</li>
                                        <li className="text-sm font-semibold text-white pt-2 text-left pl-0">Group Companies</li>
                                    </ul>
                                </div>
                                <div className="flex-1 p-2">
                                    <p className="text-[17px] font-bold text-[#EEDCB2] text-left pl-5">Category</p>
                                    <ul className="pl-[20px]">
                                        <li className="text-sm font-semibold text-white pt-3 text-left pl-0">Interior paints</li>
                                        <li className="text-sm font-semibold text-white pt-2 text-left pl-0">Exterior paints</li>
                                        <li className="text-sm font-semibold text-white pt-2 text-left pl-0">Undercoats</li>
                                        <li className="text-sm font-semibold text-white pt-2 text-left pl-0">Painting tools</li>
                                        <li className="text-sm font-semibold text-white pt-2 text-left pl-0">Water proofing</li>
                                    </ul>
                                </div>
                                <div className="flex-1 p-2">
                                    <p className="text-[17px] font-bold text-[#EEDCB2] text-left pl-5">Services</p>
                                    <ul className="pl-[20px]">
                                        <li className="text-sm font-semibold text-white pt-3 text-left pl-0">Wall painting</li>
                                        <li className="text-sm font-semibold text-white pt-2 text-left pl-0">Water Solution</li>
                                        <li className="text-sm font-semibold text-white pt-2 text-left pl-0">Painting</li>
                                        <li className="text-sm font-semibold text-white pt-2 text-left pl-0">Colour shades</li>
                                    </ul>
                                </div>
                                <div className="flex-1 p-2">
                                    <p className="text-[17px] font-bold text-[#EEDCB2] text-left pl-0">Downloads</p>
                                    <ul className="pl-0">
                                        <li className="text-sm pt-3 text-left pl-0 text-[17px] font-bold text-[#EEDCB2]">Become a dealer</li>
                                        <li className="text-sm pt-2 text-left pl-0 text-[17px] font-bold text-[#EEDCB2]">Blogs</li>
                                        <li className="text-sm pt-2 text-left pl-0 text-[17px] font-bold text-[#EEDCB2]">Contact</li>
                                    </ul>
                                    <div className='flex justify-center gap-[20px] pt-8 pb-8 pl-0'>
                                        
                                        <img src={Facebook} alt="logo" className="w-5 h-5 border border-white p-0.5 rounded-full" />
                                        <img src={Instagram} alt="logo" className="w-5 h-5 border border-white p-0.5 rounded-full" />
                                        <img src={Youtube} alt="logo" className="w-5 h-5 border border-white p-0.5 rounded-full" />
                                        <img src={Twitter} alt="logo" className="w-5 h-5 border border-white p-0.5 rounded-full" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#0060AF] p-3 grid grid-cols-3 gap-4 px-8'>
                <div className='flex items-center justify-center text-white ' >
                    <p className='ml-[-222px] text-sm font-medium'>Terms & Conditions</p>
                </div>
                <div className='flex items-center justify-center text-white'>
                    <p className='text-sm font-medium'> ALL RIGHTS RESERVED</p>
                </div>
                <div className='flex items-center justify-center text-white ' >
                    <p className='mr-[-222px] text-sm font-medium'>Privacy Policy</p>
                </div>
            </div>

        </>

    )
}

export default Footer