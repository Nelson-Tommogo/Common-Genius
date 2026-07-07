'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navItems = [
  { href: '/', label: 'Home'},
  { href: '/stack', label: 'Stack'},
  { href: '/projects', label: 'Projects'},
  { href: '/contacts', label: 'Contact'},
  {href: '/development', label: 'Pricing'},
];

export default function TopBar() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-100 border-b border-slate-200 shadow-lg z-40">
      <div className="h-14 md:h-16 flex items-center justify-between px-4 md:px-6 max-w-7xl mx-auto w-full">
        {/* Brand/Logo section */}
        <div className="flex items-center gap-3">
          <h2 className="text-lg md:text-xl font-bold text-black truncate">Nelson Tommogo</h2>
        </div>
        
        {/* Desktop Navigation links */}
        <nav className="hidden md:block">
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-gray-50 border-t border-slate-200">
          <ul className="flex flex-col">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 transition-colors duration-200 border-l-4 ${
                      isActive 
                        ? 'bg-blue-100 border-l-blue-300 text-black font-semibold' 
                        : 'text-gray-800 border-l-transparent hover:bg-gray-100'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}