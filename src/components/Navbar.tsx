import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutGroup, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/events', label: 'Events' },
    { path: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-gray-900/80 backdrop-blur-md border-b border-cyan-500/20'
        : 'bg-transparent'
        }`}
    >
      <div className="px-3 sm:px-5 lg:px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Link to="/" className="flex items-center">
              <img
                src="/icon.svg"
                alt="Logo"
                className="h-11 w-11"
              />
              <img
                src="/logo.svg"
                alt="Logo"
                className="h-5 w-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <LayoutGroup id="desktop-tubelight">
              <div className="flex items-center space-x-4 rounded-full bg-gray-900/60 px-2 py-2 border border-cyan-500/10 shadow-[0_0_20px_rgba(6,182,212,0.08)]">
                {navItems.map((item) => {
                  const active = isActive(item.path);

                  return (
                    <motion.div key={item.path} className="relative">
                      <Link
                        to={item.path}
                        className={`relative block px-4 py-2 text-sm font-semibold tracking-wide rounded-full transition-colors duration-200 ${active
                          ? 'text-cyan-200'
                          : 'text-gray-300 hover:text-cyan-200'
                          }`}
                      >
                        {active && (
                          <motion.span
                            layoutId="tubelight"
                            className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-cyan-400/10 to-violet-500/20 border border-cyan-400/25 shadow-[0_0_25px_rgba(6,182,212,0.25)]"
                            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
                          />
                        )}
                        <span className="relative z-10">{item.label}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </LayoutGroup>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400 transition-colors p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden bg-gray-900/95 backdrop-blur-md border-b border-cyan-500/20 overflow-hidden"
      >
        <LayoutGroup id="mobile-tubelight">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => {
              const active = isActive(item.path);

              return (
                <motion.div
                  key={item.path}
                  whileHover={{ x: 6 }}
                  className="relative block"
                >
                  <Link
                    to={item.path}
                    className={`relative block px-4 py-3 text-base font-semibold transition-colors duration-200 rounded-xl overflow-hidden ${active
                      ? 'text-cyan-200'
                      : 'text-gray-300 hover:text-cyan-200'
                      }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="mobile-tubelight"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/15 via-cyan-400/10 to-violet-500/15 border border-cyan-400/20 shadow-[0_0_18px_rgba(6,182,212,0.22)]"
                        transition={{ type: 'spring', stiffness: 280, damping: 26 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </LayoutGroup>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;