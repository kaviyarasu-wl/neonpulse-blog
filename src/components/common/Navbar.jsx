import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router';
import Logo from './Logo';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/blog', label: 'Blog' },
  { to: '/categories', label: 'Categories' },
  { to: '/about', label: 'About' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/80 backdrop-blur-lg border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `relative font-medium text-sm tracking-wide transition-colors duration-300 ${
                    isActive
                      ? 'text-neon-cyan neon-text-cyan'
                      : 'text-gray-400 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-neon-cyan shadow-neon-cyan rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-[2px] bg-current transition-all duration-300 origin-center ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-[4px]' : ''
                }`}
              />
              <span
                className={`block h-[2px] bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`block h-[2px] bg-current transition-all duration-300 origin-center ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-[4px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 glass-card border-l border-white/10 transition-transform duration-300 ease-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ borderRadius: 0 }}
      >
        <div className="flex flex-col gap-2 pt-24 px-6">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl font-medium text-base transition-all duration-300 ${
                  isActive
                    ? 'text-neon-cyan neon-text-cyan bg-neon-cyan/5'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
