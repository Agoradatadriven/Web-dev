import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const UpworkIcon = ({ size = 16, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.48 10.16c-2.2 0-3.32 1.37-3.95 2.68l-1.8-3.86H8.97v6.23c0 1.6-1.28 2.9-2.88 2.9s-2.88-1.3-2.88-2.9v-6.23H.48v6.23c0 3.1 2.5 5.6 5.6 5.6s5.6-2.5 5.6-5.6v-2.26l1.4 3.02 2.2-1.04-1.08-2.32c1.04 1.17 2.45 1.88 4.08 1.88 3.04 0 5.52-2.48 5.52-5.52s-2.48-5.52-5.52-5.52zm0 8.52c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/>
  </svg>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Journey', href: '#journey' },
    { name: 'Skills', href: '#skills' },
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4 border-b border-zinc-200/50' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="block">
          <img
            src={`${import.meta.env.BASE_URL}agora-logo-nav.png`}
            alt="Agora Data Driven"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#52992C] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="https://www.upwork.com/agencies/1818954484693860352/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center text-sm font-medium rounded-full h-10 p-1 ps-5 pe-12 group transition-all duration-500 hover:ps-12 hover:pe-5 w-fit overflow-hidden cursor-pointer bg-[#52992C] text-white shadow-md hover:shadow-lg hover:bg-[#417a23]"
          >
            <span className="relative z-10 transition-all duration-500 whitespace-nowrap">
              Become a Client!
            </span>
            <div className="absolute right-1 w-8 h-8 bg-white text-[#52992C] rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-36px)]">
              <UpworkIcon size={16} />
            </div>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-zinc-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-zinc-100 py-4 px-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-700 hover:text-zinc-950 py-2"
              >
                {link.name}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
