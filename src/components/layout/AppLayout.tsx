import BottomNav from "./bottomnav";
import Header from "./Header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Header/>
      <main className="flex-1 p-4">{children}</main>
      <BottomNav />
    </div>
  );
}
