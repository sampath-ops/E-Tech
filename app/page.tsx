'use client'
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import FeaturedServices from "./Components/FeaturedServices";
import OurProducts from "./Components/OurProducts";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Testimonial from "./Testimonial/Testimonial";
import WhoWeAre from "./Components/WhoWeAre";
import "./embla.css"

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
       <FeaturedServices/>
       <OurProducts/>
       <WhoWeAre/>
       <Testimonial/>
       {/* <EmblaCarousel />  */}
      {/* <ContactUs/> */}
      {/* <Footer/> */}
    </div>
    );
}
