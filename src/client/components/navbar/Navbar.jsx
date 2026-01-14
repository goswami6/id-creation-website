import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
  ];

  return (
    <nav className="fixed w-full z-[100] shadow-md">
      {/* --- TOP BAR --- */}
      <div className="bg-brand-orange text-white text-[10px] font-bold uppercase tracking-widest py-2 px-6 hidden sm:flex justify-between items-center">
        <span>Premium ID Cards & Printing Solutions</span>
        <div className="flex items-center gap-4">
          <a href="tel:+919415225541" className="flex items-center gap-1 hover:text-brand-black transition-colors">
            <Phone size={12} /> +91 9415225541
          </a>
        </div>
      </div>

      {/* --- MAIN NAVBAR --- */}
      <div className="bg-brand-black text-white px-4 sm:px-8 py-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Logo" className="h-10 w-32 sm:h-12 rounded" />
            <div className="hidden sm:flex flex-col leading-tight">
             
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 font-bold text-sm uppercase tracking-wider">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-colors hover:text-brand-orange ${location.pathname === link.path ? 'text-brand-orange' : 'text-white'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="bg-brand-orange text-white px-6 py-2.5 rounded-full hover:bg-white hover:text-brand-orange transition-all duration-300 font-black text-xs">
              CONTACT US
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 focus:outline-none z-[110]"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            // Ensure it is fixed and covers the whole screen
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            // Increased z-index to [999] to ensure it is above EVERYTHING
            className="fixed inset-0 bg-brand-black z-[999] md:hidden flex flex-col overflow-y-auto"
          >
            {/* 1. INTERNAL HEADER: Required so user can always close the menu */}
            <div className="flex justify-between items-center p-6 border-b border-white/5">
              <div className="flex items-center gap-3">
                <img src="/logo.jpg" alt="Logo" className="h-10 w-25 rounded" />
               
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={32} />
              </button>
            </div>

            {/* 2. MENU CONTENT */}
            <div className="flex flex-col px-8 py-12">
              <p className="text-brand-orange text-[10px] font-black uppercase tracking-[0.5em] mb-8">
                Navigation Protocol
              </p>

              <div className="flex flex-col space-y-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={link.name}
                  >
                    <Link
                      to={link.path}
                      // Important: Close menu on link click
                      onClick={() => setIsOpen(false)}
                      className="flex justify-between items-center text-4xl font-black uppercase tracking-tighter text-white border-b border-white/5 py-5 hover:text-brand-orange transition-colors"
                    >
                      {link.name}
                      <ChevronRight className="text-brand-orange" size={24} />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* 3. MOBILE FOOTER ACTIONS */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 space-y-10"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-brand-orange text-white w-full py-5 rounded-2xl flex items-center justify-center font-black uppercase tracking-widest text-sm shadow-[0_20px_40px_-10px_rgba(255,102,0,0.3)]"
                >
                  Start a Project
                </Link>

                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-1">Inquiry Line</span>
                    <a href="tel:+919415225541" className="text-white text-xl font-black hover:text-brand-orange transition-colors">
                      +91 9415225541
                    </a>
                  </div>

                  <div className="flex gap-6 mt-4">
                    {/* Optional Social placeholders to make it look professional */}
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white text-[10px] font-bold">IG</div>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white text-[10px] font-bold">FB</div>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white text-[10px] font-bold">WA</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;