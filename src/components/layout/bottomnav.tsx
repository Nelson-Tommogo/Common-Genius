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
    <nav className="md:hidden border-t border-gray-300 bg-white">
      <ul className="flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          
          return (
            <li key={item.href} className="flex-1 border-r border-gray-300 last:border-r-0">
              <Link
                href={item.href}
                className={`
                  block text-center py-4 px-3 transition-colors duration-200 font-medium
                  ${isActive 
                    ? 'bg-blue-500 text-white border-b-4 border-blue-700' 
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }
                `}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}