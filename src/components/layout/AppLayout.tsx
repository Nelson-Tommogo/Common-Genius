import Footer from "../ui/Footer";
import BottomNav from "./bottomnav";
import Header from "./Header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-1 p-4">{children}</main>
      {/* Footer - visible on desktop, hidden on mobile */}
      <div className="hidden md:block">
        <Footer />
      </div>
      {/* BottomNav - visible on mobile, hidden on desktop */}
      <div className="block md:hidden">
        <BottomNav />
      </div>
    </div>
  );
}