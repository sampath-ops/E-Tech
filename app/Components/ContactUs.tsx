import Image from "next/image";

const ContactUs = () => {
    return ( 
        
        <div className="flex my-10 flex-col lg:flex-row lg:mt-14 gap-4 lg:gap-8 md:my-[84px] lg:my-[60px] lg:mx-[100px] md:mx-[30px] mx-4">
            <div className="flex-1 flex flex-col items-center lg:items-start">
                <h2 className="text-[16px] md:text-[25px] lg:text-[40px] font-gilroy-bold">Let’s talk with us</h2>
                <p className="text-[14px] md:text-[16px] text-center lg:text-left text-[#3D3D3D] mt-4 mb-5">Questions, comments, or suggestions? Simply fill in the form and we’ll be in touch shortly</p>
                <Image alt="Hero Contact" src={"/Images/Hero-Contact-Image.png"} className=" ml-auto mr-auto" width={600} height={370}/>
            </div>
            <div className="flex-1 bg-[#FFF] rounded-[16px] shadow-lg border flex flex-col gap-5 p-[20px] md:p-[25px] lg:p-[50px]">
                <div className="flex gap-4 flex-col md:flex-row">
                    <input type="text" placeholder="First Name*" className="border border-[#828282] border-solid bg-[#F9F9F9] py-2 lg:py-3 px-4 lg:px-5 rounded-md md:text-[16px] lg:w-full md:w-[180px]  focus:outline-none  focus:border-[#00C700] md:flex-1"/>
                    <input type="text" placeholder="Last Name*" className="border border-[#828282] border-solid bg-[#F9F9F9] py-2 lg:py-3 px-4 lg:px-5 rounded-md md:text-[16px] lg:w-full md:w-[180px] focus:outline-none focus:border-[#00C700] md:flex-1"/>
                </div>
                <div>
                    <input type="email" name="" id="" placeholder="Email*" className= " w-full border border-[#828282] border-solid bg-[#F9F9F9] py-3 px-5 rounded-md focus:outline-none focus:border-[#00C700]"/>
                </div>
                <div>
                    <input type="number" name="" id="" placeholder="Phone Number*" className="w-full border border-[#828282] border-solid bg-[#F9F9F9] py-3 px-5 rounded-md focus:outline-none focus:border-[#00C700]"/>
                </div>
                <div>
                    <textarea name="" id="" cols={10} rows={5} placeholder="Your message..." className="w-full p-5 border border-[#828282] border-solid bg-[#F9F9F9] rounded-md focus:outline-none focus:border-[#00C700]"></textarea>
                </div>
                <div className="flex justify-center mt-3">
                    <button className="bg-[#00C700] text-[#FFF] text-[18px] px-[45px] py-3 rounded-md">Send Message</button>
                </div>
            </div>
        </div>
     );
}
 
export default ContactUs;