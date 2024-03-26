import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
const Navbar = () => {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
        document.body.style.overflow = nav ? 'auto' : 'hidden';
    };

    return (
        <div id="Nav_root" className="flex justify-between lg:px-[100px] px-[25px]  md:px-[20px] py-[40px] md:py-[50px] w-full absolute md:gap-6">
            <div id="nav_logo" className="lg:flex-[0.5] md:flex-[0.3] items-center flex font-gilroy font-extrabold"><span className=" text-[#00C700] md:text-2xl text-xl ">Green-</span><span className="text-[#FFF500] md:text-2xl text-xl">Tech</span></div>
            {/* Desktop Navigation */}
            <div id="nav_menu" className="flex md:flex-1 gap-[80px]">
                <ul className="hidden md:flex flex-auto justify-between text-white items-center">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Products</li>
                    <li>Careers</li>
                </ul>
                <div className="text-end grid grid-flow-col items-center gap-6">
                    <button className="border border-[#FFF500] px-4 sm:px-6 py-2 md:px-[30px] md:py-[10px] text-[#FFF500] rounded-md">Contact us</button>
                    {/* Mobile Navigation Icon */}
                    <div onClick={handleNav} className='block cursor-pointer md:hidden'>
                        {nav ? <AiOutlineClose className="text-white" size={30} /> : <AiOutlineMenu className="text-white" size={30} />}
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <ul
                className={
                    nav
                        ? 'fixed md:hidden left-0 top-0 w-[60%] h-full p-8 text-center bg-[#000300] ease-in-out duration-500'
                        : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                }
            >

                {/* Mobile Navigation Items */}
                <li className='p-4 text-white hover:bg-[#FFF500] duration-100 hover:text-black cursor-pointer rounded-md'>Home</li>
                <li className='p-4 text-white hover:bg-[#FFF500] duration-100 hover:text-black cursor-pointer rounded-md'>About</li>
                <li className='p-4 text-white hover:bg-[#FFF500] duration-100 hover:text-black cursor-pointer rounded-md'>Services</li>
                <li className='p-4 text-white hover:bg-[#FFF500] duration-100 hover:text-black cursor-pointer rounded-md'>Products</li>
                <li className='p-4 text-white hover:bg-[#FFF500] duration-100 hover:text-black cursor-pointer rounded-md'>Careers</li>
            </ul>

        </div>
    );
}

export default Navbar;