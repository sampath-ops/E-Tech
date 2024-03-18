const Navbar = () => {
    return (
        <div id="Nav_root" className=" flex justify-between px-[100px] py-[50px] w-full absolute">
            <div id="nav_logo" className=" flex-[0.4] items-center flex font-gilroy font-extrabold"><span className=" text-[#00C700] text-2xl  ">Green-</span><span className="text-[#FFF500] text-2xl">Tech</span></div>
            <div id="nav_menu" className=" flex-1">
                    <ul className="flex justify-between text-white items-center">
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Products</li>
                        <li>Careers</li>
                        <button className="border border-[#FFF500] px-[30px] py-[10px] text-[#FFF500]">Contact us</button>
                    </ul>
            </div>
        </div>
      );
}
 
export default Navbar;