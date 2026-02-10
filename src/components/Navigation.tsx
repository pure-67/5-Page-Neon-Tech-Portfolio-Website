import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';
const navLinks = [
{
  name: 'Home',
  path: '/'
},
{
  name: 'About',
  path: '/about'
},
{
  name: 'Activities',
  path: '/activities'
},
{
  name: 'Works',
  path: '/works'
},
{
  name: 'Skills',
  path: '/skills'
}];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3 bg-white/5 backdrop-blur-xl border-b border-white/10' : 'py-6 bg-transparent'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Terminal className="w-5 h-5 text-cyan-500" />
              <div className="absolute inset-0 bg-cyan-400 blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            </div>
            <span className="text-lg font-bold tracking-widest text-slate-800 group-hover:text-cyan-600 transition-colors font-mono">
              PORTFOLIO<span className="animate-blink text-cyan-400">_</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative group py-2">

                  <span
                    className={`text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300 ${isActive ? 'text-cyan-600 text-glow' : 'text-slate-500 group-hover:text-cyan-500'}`}>

                    {link.name}
                  </span>

                  {/* Hover Underline */}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-400 group-hover:w-full transition-all duration-300 ease-out" />

                  {/* Active Indicator */}
                  {isActive &&
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,212,255,0.8)]"
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30
                    }} />

                  }
                </Link>);

            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-cyan-500 transition-colors relative group"
            onClick={() => setIsOpen(!isOpen)}>

            <div className="absolute inset-0 bg-cyan-400/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen &&
        <>
            <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)} />

            <motion.div
            initial={{
              x: '100%'
            }}
            animate={{
              x: 0
            }}
            exit={{
              x: '100%'
            }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 200
            }}
            className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-white/90 backdrop-blur-2xl border-l border-white/20 shadow-2xl z-50 md:hidden flex flex-col pt-24 px-6">

              <nav className="flex flex-col space-y-6">
                {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.path}
                    initial={{
                      x: 50,
                      opacity: 0
                    }}
                    animate={{
                      x: 0,
                      opacity: 1
                    }}
                    transition={{
                      delay: index * 0.1
                    }}>

                      <Link
                      to={link.path}
                      className={`text-lg font-medium tracking-wider uppercase flex items-center justify-between group ${isActive ? 'text-cyan-600' : 'text-slate-600'}`}>

                        <span>{link.name}</span>
                        {isActive &&
                      <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#00d4ff]" />
                      }
                      </Link>
                      <div className="h-px w-full bg-gradient-to-r from-slate-200 to-transparent mt-4" />
                    </motion.div>);

              })}
              </nav>
            </motion.div>
          </>
        }
      </AnimatePresence>
    </header>);

}