import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import StarSpeakers from "@/components/sections/star-speakers";
import PhotoGallery from "@/components/sections/photo-gallery";
import Sponsors from "@/components/sections/sponsors";
import Footer from "@/components/sections/footer";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Testimonials />
      {/* <Marquee/> */}
      <StarSpeakers />
      
      <Sponsors />
      <PhotoGallery />
      <Footer />
    </div>
  );
}
