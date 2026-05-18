import Sidebar from "./sidebar";
import BottomNav from "./bottomnav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Sidebar />
      <main className="flex-1 p-4">{children}</main>
      <BottomNav />
    </div>
  );
}
