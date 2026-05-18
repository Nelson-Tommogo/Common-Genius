'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { MdHome, MdCode, MdWork, MdContactMail } from 'react-icons/md';

const navItems = [
  { href: '/', label: 'Home', icon: MdHome },
  { href: '/stack', label: 'Stack', icon: MdCode },
  { href: '/projects', label: 'Projects', icon: MdWork },
  { href: '/contact', label: 'Contact', icon: MdContactMail },
];

export default function Sidebar() {
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

  // Don't render on mobile
  if (isMobile) {
    return null;
  }

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-blue-200 border-r border-slate-200 shadow-lg z-40">
      <div className="p-6">
        <h2 className="text-xl font-bold text-black mb-2">Nelson Tommogo</h2>
        <p className="text-sm text-black">Web3 & Agritech Developer</p>
      </div>
      
      <nav className="mt-6">
        <ul className="space-y-2 px-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                    isActive 
                      ? 'bg-blue-200 text-black font-semibold' 
                      : 'text-gray-800 hover:bg-blue-100 hover:text-gray-700'
                  }`}
                >
                  <Icon size={20} />
                  <span className="text-sm">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}