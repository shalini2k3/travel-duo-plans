import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import TravelStories from "@/components/TravelStories";
import PhotoGallery from "@/components/PhotoGallery";
import BudgetBreakdown from "@/components/BudgetBreakdown";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <AboutUs />
        <TravelStories />
        <PhotoGallery />
        <BudgetBreakdown />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
