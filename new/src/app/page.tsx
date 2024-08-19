import FeaturedCourses from "./components/FeaturedCourses";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection";
import Instructor from "./components/instructor";
import MusicSchoolTestimonal from "./components/TestimonalCards";
import UpcomingWebinar from "./components/UpcomingWebinar";
import WhyChooseUs from "./components/WhyChooseUs"

export default function Home() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <MusicSchoolTestimonal/>
      <UpcomingWebinar/>
      <Instructor/>
      <Footer/>
    </div>
   )
}

