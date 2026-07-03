'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/stack', label: 'Stack' },
  { href: '/projects', label: 'Projects' },
];

export default function BottomNav() {
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

  if (!isMobile) {
    return null;
  }

  return (
    <>
      {/* Safe area spacer for iOS */}
      <div className="h-20 md:hidden" />
      
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        {/* Main container with glass effect */}
        <div className="relative mx-3 mb-4 overflow-hidden rounded-2xl bg-white/90 shadow-lg backdrop-blur-xl backdrop-saturate-150 border border-white/20">
          
          {/* Subtle gradient line at top */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
          
          <ul className="relative flex items-center justify-around px-3 py-2.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              
              return (
                <li key={item.href} className="flex-1">
                  <Link
                    href={item.href}
                    className={`
                      relative flex flex-col items-center justify-center py-2
                      transition-all duration-300 ease-out
                      ${isActive 
                        ? 'scale-105' 
                        : 'hover:scale-105 active:scale-95'
                      }
                    `}
                  >
                    {/* Active indicator dot */}
                    {isActive && (
                      <span className="absolute -top-2 left-1/2 h-1.5 w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/30" />
                    )}
                    
                    {/* Label with state styling */}
                    <span className={`
                      relative text-sm font-medium tracking-wide transition-all duration-300
                      ${isActive 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold' 
                        : 'text-slate-500 hover:text-slate-700'
                      }
                    `}>
                      {item.label}
                    </span>
                    
                    {/* Active background pill */}
                    {isActive && (
                      <div className="absolute inset-0 -mx-2 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}