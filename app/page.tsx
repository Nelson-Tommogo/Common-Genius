import ContactSection from "@/src/components/appcomponents/ContactSection";
import ProfileSection from "@/src/components/appcomponents/ProfileSection";
import ProjectsSection from "@/src/components/appcomponents/ProjectsSection";
import ServicesCarousel from "@/src/components/appcomponents/ServicesCarousel";


export default function Home() {
  return (
    <div className="min-h-screen py-2 px-4 pt-20 md:pt-24">
      <ProfileSection />
      <ServicesCarousel />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}