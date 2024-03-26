import { Service } from "./FeaturedServices";
import Image from "next/image";
interface Props {
    service: Service;
    key:number
}

const ServiceCards: React.FC<Props> = ({service}) => {
    return (  
        <div id="Service_card_container" className="rounded-[15px] border border-[#000] bg-[#F9F9F9] text-center px-[12px] py-3 md:py-[20px] lg:py-[50px] lg:px-[25px] grid hover:bg-[url('/Images/Service_card_bg.png')] bg-no-repeat bg-cover cursor-pointer">
            <div className={`flex justify-center grid-rows-1`}>
                <Image src={service.image} className={`${service.bgColor} rounded-[50%] p-2`}  alt={service.name} width={60} height={60} />
            </div> 
            
           <div className="grid-row-3">
            <p id="service_name" className=" font-semibold font-gilroy-semibold lg:text-[18px] text-[14px] mt-[18px]">{service.name}</p>
                <p id="service_desc" className="text-[#626262] text-[14px] lg:text-[18px] font-gilroy mt-[10px]">{service.desc}</p>
           </div>
            <div className="flex gap-2 justify-center grid-rows-1">
            <button className="mt-[15px] text-[#00C700] text-[14px] lg:text-[16px]">Know More <Image className="inline-block" src="/Images/right-arrow.png" alt="right arrow" width={20} height={20}/></button>
            </div>
        </div>
    );
}
 
export default ServiceCards;