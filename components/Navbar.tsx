'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/app/providers';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'volunteering', 'contact'];
      const current = sections.find((section) => {
        if (section === 'home') return window.scrollY < 500;
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Volunteering', href: '#volunteering' },
    { label: 'Contact', href: '#contact' },
  ];

  const isActive = (href: string) => {
    const section = href.replace('#', '');
    return activeSection === section;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            onClick={() => setActiveSection('home')}
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
              B
            </div>
            <span className="font-bold text-xl tracking-tight heading-font hidden sm:block text-slate-900 dark:text-white">
              Bhagya
            </span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setActiveSection(item.href.replace('#', ''))}
                className={`text-sm font-medium transition-colors relative group ${
                  isActive(item.href)
                    ? 'text-purple-600 dark:text-purple-400'
                    : 'hover:text-purple-600 dark:hover:text-purple-400 text-slate-700 dark:text-slate-300'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: isActive(item.href) ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.a
              href="https://drive.google.com/your-cv"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={16} /> CV
            </motion.a>

            <motion.button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center"
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setIsOpen(false);
                    setActiveSection(item.href.replace('#', ''));
                  }}
                  className={`block text-lg font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-purple-600 dark:text-purple-400 font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="https://drive.google.com/your-cv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-semibold justify-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Download size={16} /> Download CV
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
