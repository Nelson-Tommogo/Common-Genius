"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/about", label: "About", icon: "👤" },
  { href: "/projects", label: "Projects", icon: "💼" },
  { href: "/contact", label: "Contact", icon: "✉️" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:block w-64 border-r border-slate-200 bg-white">
      <ul className="flex flex-col space-y-2 p-4">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={
                  "flex items-center gap-3 rounded-lg px-3 py-2 transition-colors duration-200 " +
                  (isActive
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900")
                }
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}