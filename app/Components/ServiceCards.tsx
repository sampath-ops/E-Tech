"use client"
import { Service } from "./FeaturedServices";
import Image from "next/image";
interface Props {
    service: Service;
    key:number
}

const serviceColors = ["FF9317","D44CA0","001EA2","0076EF"]

const ServiceCards: React.FC<Props> = ({service}) => {
    return (  
        <div id="Service_card_container" className="rounded-[15px] border border-[#000] bg-[#F9F9F9] text-center py-[50px] px-[25px] flex-1 grid hover:bg-[url('/Images/Service_card_bg.png')] bg-no-repeat bg-cover cursor-pointer">
            <div className={`flex justify-center grid-rows-1`}>
                <img src={service.image} className={`bg-[#000] rounded-[50%] p-2`}  alt={service.name} />
            </div> 
            
           <div className="grid-row-3">
            <p id="service_name" className=" font-semibold font-gilroy-semibold text-[18px] mt-[18px]">{service.name}</p>
                <p id="service_desc" className="text-[#626262] text-[18px] font-gilroy mt-[10px]">{service.desc}</p>
           </div>
            <div className="flex gap-2 justify-center grid-rows-1">
            <button className="mt-[15px] text-[#00C700]">Know More <Image className="inline-block" src="/Images/right-arrow.png" alt="right arrow" width={20} height={20}/></button>
            </div>
        </div>
    );
}
 
export default ServiceCards;