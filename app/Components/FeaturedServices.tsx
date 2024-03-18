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
        bgColor:"FF9317",
        url:"",
        index:0
    },
    {
        name:"Eco-Friendly IT Solutions",
        image:"/Images/IT.png",
        desc:"Implementation of energy-efficient servers and data centers",
        bgColor:"",
        url:"",
        index:1
    },
    {
        name:"Smart Sustainability Solutions",
        image:"/Images/Sustain.png",
        desc:"Integration of electric and hybrid vehicles into fleets.",
        bgColor:"",
        url:"",
        index:2
    },
    {
        name:"Energy Efficiency Consulting",
        image:"/Images/Energy.png",
        desc:"Implementation of energy-efficient technologies and practices.",
        bgColor:"",
        url:"",
        index:3
    },
]

const FeaturedServices = () => {
    return ( 
        <div className="my-[60px] mx-[100px]">
            <h2 className="text-black font-gilroy font-bold text-[40px] text-center mt-[50px]">Featured Services</h2>
            <div className="flex justify-between gap-[30px] mt-[45px]">
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