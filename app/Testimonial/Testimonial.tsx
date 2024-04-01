import EmblaCarousel from "../Components/Carousel/EmblaCarousel";

const Testimonial = () => {

    return (
        <div className="mx-4 my-10 md:my-[84px] md:mx-[30px] lg:my-[60px] lg:mx-[100px]">
            <h2 className="text-black font-gilroy font-bold text-[40px] text-center my-[50px]">Testimonials</h2>
            <div className="">
             <EmblaCarousel/>
            </div>
        </div>
    );
}

export default Testimonial;