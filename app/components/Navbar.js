'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => setNavOpen(!navOpen);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/tasks', label: 'Tasks' },
    { href: '/howitworks', label: 'How it work?' }, 
  ];

  return (
    <nav className="flex justify-between items-center py-6 px-8 lg:px-16 shadow-sm bg-white sticky top-0 z-50">
      <div className="text-2xl font-extrabold text-primary">Taskly</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-10 text-gray-700 font-medium">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`hover:text-primary transition ${
              pathname === href ? 'border-b-2 border-primary text-primary pb-1' : ''
            }`}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={handleToggle} className="focus:outline-none">
          <svg
            className="w-8 h-8 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {navOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Full-screen Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center gap-8 text-xl font-semibold transition-transform duration-300 ease-in-out ${
          navOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={handleToggle}
            className={`hover:text-primary ${
              pathname === href ? 'text-primary underline' : ''
            }`}
          >
            {label}
          </Link>
        ))}
        <Link href="/login" className="text-primary hover:underline" onClick={handleToggle}>Login</Link>
        <button onClick={handleToggle} className="absolute top-8 right-8 text-3xl text-primary">&times;</button>
      </div>
    </nav>
  );
}
