import Image from "next/image";

const WhoWeAre = () => {
    return (
        <div className="my-[60px] mx-[100px]">
            <h2 className=" text-center text-[40px] font-gilroy-bold font-bold">Who We Are?</h2>
            <div className="flex gap-6 mt-12"> 
                <Image className="flex-1 rounded-lg" src={"/Images/greenLight.png"} alt="green-light" width={600} height={400}/>
                <div className="flex-1">
                    <div>
                        <h3 className="text-[25px] font-gilroy-bold font-bold">Our Vision</h3>
                        <p className="text-[#3D3D3D] text-xl font-gilroy-medium text-[18px] mt-2">To lead the way in providing innovative, sustainable technology solutions that empower businesses and individuals to thrive while preserving the planet.</p>
                    </div>
                    <div className="mt-3">
                        <h3 className=" font-gilroy-bold text-[25px] font-bold">Our Commitment</h3>
                        {/* radix tabs component */}
                    </div>
                </div>
            </div>
        </div>
      );
}
 
export default WhoWeAre;