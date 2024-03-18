import Image from "next/image";

const ContactUs = () => {
    return ( 
        <div className="flex mt-14 my-[60px] mx-[100px] gap-8">
            <div className="flex-1">
                <h2 className="text-[40px] font-gilroy-bold">Let’s talk with us</h2>
                <p className="text-[#3D3D3D] mt-4 mb-5">Questions, comments, or suggestions? Simply fill in the form and we’ll be in touch shortly</p>
                <Image alt="Hero Contact" src={"/Images/Hero-Contact-Image.png"} width={600} height={370}/>
            </div>
            <div className="flex-1 bg-[#FFF] rounded-[16px] shadow-lg border flex flex-col gap-5 p-[50px]">
                <div className="flex gap-4">
                    <input type="text" placeholder="First Name*" className="flex-1 border border-[#828282] border-solid bg-[#F9F9F9] py-3 px-5 rounded-md"/>
                    <input type="text" placeholder="Last Name*" className="border border-[#828282] border-solid bg-[#F9F9F9] py-3 px-5 rounded-md"/>
                </div>
                <div>
                    <input type="email" name="" id="" placeholder="Email*" className= " w-full border border-[#828282] border-solid bg-[#F9F9F9] py-3 px-5 rounded-md"/>
                </div>
                <div>
                    <input type="number" name="" id="" placeholder="Phone Number*" className="w-full border border-[#828282] border-solid bg-[#F9F9F9] py-3 px-5 rounded-md"/>
                </div>
                <div>
                    <textarea name="" id="" cols={10} rows={5} placeholder="Your message..." className="w-full p-5 border border-[#828282] border-solid bg-[#F9F9F9] rounded-md"></textarea>
                </div>
                <div className="flex justify-center mt-3">
                    <button className="bg-[#00C700] text-[#FFF] text-[18px] px-[45px] py-3 rounded-md">Send Message</button>
                </div>
            </div>
        </div>
     );
}
 
export default ContactUs;