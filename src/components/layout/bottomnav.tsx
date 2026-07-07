'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
  Home,
  Layers3,
  FolderKanban,
} from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home', icon: <Home />, activeIcon: <Home /> },
  { href: '/stack', label: 'Stack', icon: <Layers3 />, activeIcon: <Layers3 /> },
  { href: '/projects', label: 'Projects', icon: <FolderKanban />, activeIcon: <FolderKanban /> },
  { href: '/development', label: 'Pricing', icon: <Layers3 />, activeIcon: <Layers3 /> },
];

export default function BottomNav() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  if (!isMobile) {
    return null;
  }

  return (
    <>
      <div className="h-[calc(72px+env(safe-area-inset-bottom))] md:hidden" />
      
      <nav 
        className={`
          md:hidden fixed bottom-0 left-0 right-0 z-50
          bg-white/95 backdrop-blur-xl 
          border-t border-gray-200/50
          shadow-[0_-4px_20px_rgba(0,0,0,0.08)]
          transition-transform duration-300 ease-in-out
          ${isVisible ? 'translate-y-0' : 'translate-y-full'}
        `}
        style={{
          paddingBottom: 'env(safe-area-inset-bottom)',
        }}
      >
        <ul className="flex items-center justify-around max-w-lg mx-auto px-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            
            return (
              <li key={item.href} className="flex-1 relative">
                <Link
                  href={item.href}
                  className={`
                    relative flex flex-col items-center justify-center
                    py-2.5 px-2 transition-all duration-300
                    group
                  `}
                >
                  {/* Active indicator bar */}
                  {isActive && (
                    <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-10 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
                  )}
                  
                  {/* Icon */}
                  <span className={`
                    text-2xl transition-all duration-300
                    ${isActive 
                      ? 'scale-110 drop-shadow-[0_2px_12px_rgba(59,130,246,0.4)]' 
                      : 'scale-100 group-hover:scale-105'
                    }
                  `}>
                    {isActive ? item.activeIcon : item.icon}
                  </span>
                  
                  {/* Label */}
                  <span className={`
                    text-[10px] font-medium mt-0.5 transition-all duration-300
                    ${isActive 
                      ? 'text-blue-600 font-semibold' 
                      : 'text-gray-500 group-hover:text-gray-700'
                    }
                  `}>
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}