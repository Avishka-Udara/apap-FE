import Navbar from "../components/navbar";
import HeroSlider from "../components/herosection";
import AnnouncementsSection from '../components/AnnouncementsSection';
import AboutSection from '../components/AboutSection';
import RegistrationPage from '../components/RegistrationPage';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <section className="py-16 px-4 lg:px-10 bg-gray-100">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <AboutSection />
          <AnnouncementsSection />
        </div>
      </section>
      
      <RegistrationPage />
    </>
  );
}
