import ServiceCards from "./ServiceCards";


export interface Service {
    name: string;
    image: string;
    desc: string;
    bgColor: string;
    url: string;
    index:number;
}

const servicesData : Service[] = [ 
    {
        name:"Green Building Technologies",
        image:"/Images/Building.png",
        desc:"Design and implementation of sustainable building practices",
        bgColor:"bg-[#FF9317]",
        url:"",
        index:0
    },
    {
        name:"Eco-Friendly IT Solutions",
        image:"/Images/IT.png",
        desc:"Implementation of energy-efficient servers and data centers",
        bgColor:"bg-[#D44CA0]",
        url:"",
        index:1
    },
    {
        name:"Smart Sustainability Solutions",
        image:"/Images/Sustain.png",
        desc:"Integration of electric and hybrid vehicles into fleets.",
        bgColor:"bg-[#001EA2]",
        url:"",
        index:2
    },
    {
        name:"Energy Efficiency Consulting",
        image:"/Images/Energy.png",
        desc:"Implementation of energy-efficient technologies and practices.",
        bgColor:"bg-[#0076EF]",
        url:"",
        index:3
    },
]

const FeaturedServices = () => {
    return ( 
        <div className=" my-10 md:my-[84px] lg:my-[100px] lg:mx-[100px] md:mx-[30px] mx-4"> 
            <h2 className="text-black font-gilroy font-bold text-[20px] md:text-[30px] lg:text-[40px] text-center">Featured Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 justify-between lg:gap-[30px] md:gap-4 gap-3 mt-4 md:mt-[40px] lg:mt-[45px]">
               {
                 servicesData.map((item,index)=>(
                    <ServiceCards service={item} key={index}/>
                ))
               }
            </div>
        </div>
     );
}
 
export default FeaturedServices;