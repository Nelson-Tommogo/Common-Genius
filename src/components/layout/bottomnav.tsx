//add useclinet
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/stack', label: 'Stack'},
  { href: '/projects', label: 'Projects'},
  { href: '/contact', label: 'Contact' },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/90 backdrop-blur-md shadow-inner">
      <ul className="mx-auto flex max-w-3xl justify-between px-4 py-3 text-sm text-slate-700">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href} className="flex-1">
              <Link
                href={item.href}
                className={
                  'flex h-12 flex-col items-center justify-center rounded-lg transition-colors duration-200 ' +
                  (isActive ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900')
                }
              >
                <span className="mt-1 text-xs font-medium">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
