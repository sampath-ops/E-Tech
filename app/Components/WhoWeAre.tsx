import Image from "next/image";
import * as Tabs from '@radix-ui/react-tabs';
import "./RadixTab.css";
const OurCommitment = () => {
    return (
        <Tabs.Root defaultValue="Sustainability" orientation="vertical">
            <Tabs.List className="TabsList flex lg:gap-10" aria-label="tabs">
                <Tabs.Trigger className="TabsTrigger font-gilroy-medium text-[#A1A1A1] text-[16px] md:text-lg flex-1" value="Sustainability">Sustainability</Tabs.Trigger>
                <Tabs.Trigger className="TabsTrigger font-gilroy-medium text-[#A1A1A1] text-[16px] md:text-lg flex-1" value="Innovation">Innovation</Tabs.Trigger>
                <Tabs.Trigger className="TabsTrigger font-gilroy-medium text-[#A1A1A1] text-[16px] md:text-lg flex-1" value="Technology">Technology</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="Sustainability" className="font-gilroy-medium text-[16px] md:text-lg text-[#3D3D3D] mt-4 lg:mt-6">Ignite a sustainable revolution with our commitment to eco-friendly practices. From renewable energy solutions to green supply chain management, we prioritize sustainability in every facet.</Tabs.Content>
            <Tabs.Content value="Innovation" className="font-gilroy-medium text-[16px] md:text-lg text-[#3D3D3D] mt-4  lg:mt-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quasi repellat possimus officia nobis deserunt ipsam, illo consequuntur aperiam aliquid saepe voluptatibus, ea fugiat eius sed!</Tabs.Content>
            <Tabs.Content value="Technology" className="font-gilroy-medium text-[16px] md:text-lg text-[#3D3D3D] mt-4  lg:mt-6">Beatae porro! Ratione necessitatibus, perspiciatis dolor laborum voluptas aperiam aliquid,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt labore cumque a aspernatur.</Tabs.Content>
        </Tabs.Root>
    )
}

const WhoWeAre = () => {
    return (
        <div className=" mt-16 mx-4 my-10 md:my-[80px] lg:my-[100px] md:mx-[80px] lg:mx-[200px]">
            <h2 className="text-[20px] md:text-[30px] lg:text-[40px]  text-center font-gilroy-bold font-bold mb-6 ">Who We Are?</h2>
            <div className="flex gap-6 md:mt-8 lg:mt-12 flex-col lg:flex-row">
                <Image className="flex-1 rounded-lg md:ml-auto md:mr-auto lg:m-0" src={"/Images/greenLight.png"} alt="green-light" width={600} height={400} />
                <div className="flex-1">
                    <div>
                        <h3 className="text-[25px] font-gilroy-bold font-bold">Our Vision</h3>
                        <p className="text-[#3D3D3D] font-gilroy-medium text-[16px] md:text-[18px] mt-2">To lead the way in providing innovative, sustainable technology solutions that empower businesses and individuals to thrive while preserving the planet.</p>
                    </div>
                    <div className="mt-3">
                        <h3 className=" font-gilroy-bold text-[25px] font-bold mb-4">Our Commitment</h3>
                        {/* radix tabs component */}
                        <OurCommitment />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhoWeAre;