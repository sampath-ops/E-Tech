const Hero = () => {
    return (  
        <div className="bg-[url('/Images/hero.png')] h-[100vh] bg-cover bg-center flex justify-center items-center text-white">
            <div className=" text-center">
                <h2 className=" md:text-[45px] lg:text-[60px] font-gilroy font-bold">EcoTech Solutions for a Greener World</h2>
                <p className=" text-center mt-4 md:text-[16px] lg:text-[18px] leading-8">We committed to promoting cost-effective solutions through the implementation of innovative green technologies,  <br />
enabling a more efficient work environment for your facility.</p> 
                <button className="bg-[#00C700] text-white rounded-[8px] px-[30px] py-[10px] mt-5">Explore More</button>
            </div>
        </div>
    );
}
 
export default Hero;