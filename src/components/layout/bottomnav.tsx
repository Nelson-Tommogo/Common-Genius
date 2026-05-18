'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/stack', label: 'Stack'},
  { href: '/projects', label: 'Projects'},
  { href: '/contact', label: 'Contact' },
];

export default function BottomNav() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if screen is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on initial mount
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Don't render on desktop
  if (!isMobile) {
    return null;
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-blue-200 backdrop-blur-md shadow-inner">
      <ul className="mx-auto flex max-w-3xl justify-between px-4 py-3 text-sm text-slate-700">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href} className="flex-1">
              <Link
                href={item.href}
                className={
                  'flex h-12 flex-col items-center justify-center rounded-lg transition-colors duration-200 ' +
                  (isActive 
                    ? 'bg-blue-200 text-black font-semibold' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900')
                }
              >
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}