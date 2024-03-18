import Image from "next/image";


const ourProductsData = [
    {
        name:"Renewable Energy Systems",
        desc:["Empower your future with our Renewable Energy Systems, offering cutting-edge solar and wind solutions, advanced energy storage, and sustainable biomass and hydropower technologies.","Experience innovation in green energy, tailored to meet your energy needs."],
        url:"#",
        isrev:false,
        image:"/Images/Renewable_energy.png"
    },
    {
        name:"Smart Thermostats",
        desc:["Elevate comfort and efficiency with our Smart Thermostats. Experience personalized climate control, energy savings, and seamless integration with smart home ecosystems.","Harness innovation for a greener lifestyle while enjoying the perfect balance of comfort and sustainability."],
        url:"#",
        isrev:true,
        image:"/Images/smart_themostats.png"
    },
    {
        name:"Environmental Sensors",
        desc:["Empower your surroundings with our Environmental Sensors. Monitor air and water quality in real-time, ensuring a healthier and safer environment.", "Embrace innovation for sustainable living, as our sensors contribute to a smarter, more responsive approach to environmental stewardship."],
        url:"#",
        isrev:false,
        image:"/Images/environmental_sensors.png"
    },
]


const OurProducts = () => {
    return (
        <div className="my-[100px] mx-[200px]">
            <h2 className="text-black font-gilroy font-bold text-[40px] text-center my-[50px]">Our Products</h2>
           {
            ourProductsData.map(({name,isrev,url,image,desc},index)=>(
                <div key={index} className={`flex mb-[100px] ${isrev?"flex-row-reverse":""}`}>
                <div className="flex flex-1 justify-center">
                    <Image className=" rounded-[18px]" alt="renewable-enery" src={image} width={500} height={450}/>
                </div>
                <div className="flex-1">
                    <h3 className=" font-gilroy-bold text-[30px]">{name}</h3>
                    <div className="text-[#3D3D3D] text-[18px] font-gilroy-medium mt-4">
                        <p className="leading-7">{desc[0]} </p>
                        <p className="leading-7">{desc[1]}</p>
                    </div>
                    <button className=" mt-3 border-[#00C700] border-[1px] px-[30px] py-[10px] text-[#00C700] text-[16px] font-gilroy-medium rounded-md">Know More</button>
                </div>
           </div>
            ))
           }
           <div className="text-center">
            <button className="bg-[#00C700] py-[12px] px-[24px] text-[#FFF] rounded-lg">View All Product</button>
           </div>
        </div>
      );
}
 
export default OurProducts;