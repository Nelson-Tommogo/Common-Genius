'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Layers3,
  FolderKanban,
} from 'lucide-react';

const navItems = [
  {
    href: '/',
    label: 'Home',
    icon: Home,
  },
  {
    href: '/stack',
    label: 'Stack',
    icon: Layers3,
  },
  {
    href: '/projects',
    label: 'Projects',
    icon: FolderKanban,
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 w-[92%] max-w-md -translate-x-1/2 md:hidden">
      <div className="rounded-3xl border border-white/20 bg-white/80 shadow-2xl backdrop-blur-xl">
        <ul className="flex items-center justify-around py-2">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;

            return (
              <li key={href} className="flex-1">
                <Link
                  href={href}
                  className={`
                    mx-2 flex flex-col items-center justify-center rounded-2xl
                    py-2 transition-all duration-300
                    ${
                      active
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                    }
                  `}
                >
                  <Icon
                    size={22}
                    strokeWidth={2}
                    className={active ? 'scale-110' : ''}
                  />

                  <span className="mt-1 text-xs font-medium">
                    {label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}