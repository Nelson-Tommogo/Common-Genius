'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navItems = [
  { href: '/', label: 'Home'},
  { href: '/stack', label: 'Stack'},
  { href: '/projects', label: 'Projects'},
  { href: '/contacts', label: 'Contact'},
];

export default function TopBar() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-gray-100 border-b border-slate-200 shadow-lg z-40 border-b-slate-200">
      <div className="h-full flex items-center justify-between px-6 max-w-7xl mx-auto">
        {/* Brand/Logo section */}
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold text-black">Nelson Tommogo(CG)</h2>
          <div className="w-1 h-1 bg-blue-500 rounded-full top-10"></div>
        </div>
        
        {/* Navigation links */}
        <nav>
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                      isActive 
                        ? 'bg-blue-300 text-black font-semibold' 
                        : 'text-gray-800 hover:bg-blue-100 hover:text-gray-700'
                    }`}
                  >
                    <span className="text-sm">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}