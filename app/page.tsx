import ContactSection from "@/src/components/appcomponents/ContactSection";
import ProfileSection from "@/src/components/appcomponents/ProfileSection";
import ProjectsSection from "@/src/components/appcomponents/ProjectsSection";
import ServicesCarousel from "@/src/components/appcomponents/ServicesCarousel";
import TopBar from "@/src/components/layout/Header";
import BottomNav from "@/src/components/layout/bottomnav";


export default function Home() {
  return (
    <>
      <TopBar />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-4 sm:py-6 md:py-8 px-4 pt-16 sm:pt-20 md:pt-24 pb-20 md:pb-0">
        <ProfileSection />
        <ServicesCarousel />
        <ProjectsSection />
        <ContactSection />
      </div>
      <BottomNav />
    </>
  );
}