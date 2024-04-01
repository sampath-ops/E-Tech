import Image from "next/image"

export const TestimonialCard = ({ data }: any, index: number) => {
    const { name, designation, review, rating, img } = data
    console.log("rating: ",rating)
    const totalStars = 5
    const stars = Array.from({ length: totalStars }, (value, index) => {
        if (index < rating) {
            return <Image className="inline-block" key={index} src={"/Images/Star.png"} alt="YellowStar" width={20} height={20} />
        }
        else {
            return <Image className="inline-block hidden" key={index} src={"/Images/Star.png"} alt="EmptyStar" width={20} height={20} />
        }
    })

    return (
        <div id="testimonial_card" className="bg-[#FFF] shadow-lg rounded-xl border p-6 cursor-pointer embla__slide basis-[100%] md:basis-[55%] lg:basis-[33%] flex-shrink-0 flex-grow-0" key={index}>
            <div className="grid relative mb-4">
                <Image className="rounded-[50%] absolute top-[-65px]" src={img} alt="" width={80} height={80} />
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