    import Image from "next/image";
    import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

    const testimonialData = [
        {
            name:"Ravikumar KL",
            designation:"Sustainable Business Owner",
            review:"Switching toGreen-Tech for our renewable energy needs was a game-changer for our business. Their cutting-edge solutions not only reduced our carbon footprint but also saved us on energy costs.",
            rating:5,
            img:"/Images/Ravi.png"
        },
        {
            name:"Nareshkumar G",
            designation:"Electric Vehicle Enthusiast",
            review:"I'm thrilled with the electric vehicle options provided by Green-Tech. The combination of eco-friendliness and advanced technology makes driving a pleasure while contributing to a cleaner planet.",
            rating:5,
            img:"/Images/Naresh.png"
        },
        {
            name:"David Rathore",
            designation:"Homeowner Going Green",
            review:"Upgrading my home with Green-Tech's green building technologies was a smart investment. The energy savings are noticeable, and the positive impact on the environment is immeasurable.",
            rating:5,
            img:"/Images/David.png"
        },
    ]


    const TestimonialCard = ({data}:any,index:number)=>{
        const {name,designation,review,rating,img} = data
        const totalStars = 5
        const stars = Array.from({length:totalStars},(value,index)=>{
            if(index < rating){
            return <Image className="inline-block" key={index} src={"/Images/Star.png"} alt="YellowStar" width={20} height={20}/>
            }
            else{
                return <Image className="inline-block" key={index} src={"/Images/Star.png"} alt="EmptyStar" width={20} height={20}/>
            }
        })

        return(
            <div id="testimonial_card" className="bg-[#FFF] shadow-lg rounded-xl border p-6 cursor-pointer" key={index}>
                <div className="grid relative mb-4">
                    <Image className="rounded-[50%] absolute top-[-65px]" src={img} alt="" width={80} height={80}/>
                    <div className=" flex justify-end items-center">
                        {stars}
                    </div>
                </div>
                <div>
                    <p>{name}</p>
                    <p id="designation" className="text-[#676767] text-[12px]">{designation}</p>
                </div>
                <div className=" mt-4">
                    <p>{review}</p>
                </div>
            </div>
        )
    }


    const Testimonial = () => {

        return ( 
            <div className="my-[60px] mx-[100px]">
                <h2 className="text-black font-gilroy font-bold text-[40px] text-center my-[50px]">Testimonials</h2>
                <div className="flex gap-[60px]">
                        {
                            testimonialData.map((review,index)=>(
                                <TestimonialCard key={index} data={review}/>
                            ))
                        }
                </div>
            </div>
        );
    }
    
    export default Testimonial;