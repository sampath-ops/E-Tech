import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import FeaturedServices from "./Components/FeaturedServices";
import OurProducts from "./Components/OurProducts";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FeaturedServices/>
      <OurProducts/>
      <ContactUs/>
      <Footer/>
    </div>
    );
}
