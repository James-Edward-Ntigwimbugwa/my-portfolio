import { useState, useEffect } from 'react';
import { scrollTo } from '../utils/scrollTo';
import { navItems } from '../data/navItems';
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useDarkMode } from '@/context/useDarkMode';
import { useStickyHeader } from '@/hooks/UseStickyHeader';
import { useScrollSpy } from '@/hooks/UseScrollSpy';

const Header = () => {
  const { isDarkMode , toggleDarkMode } = useDarkMode();
  const { isSticky } = useStickyHeader(50);
  const activeSection = useScrollSpy(navItems.map(item => item.href));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close mobile menu when a nav item is clicked
  const handleNavItemClick = (href: string) => {
    scrollTo(href);
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isSticky ? 'bg-white dark:bg-gray-900 shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-lg font-bold flex items-center">
          <span className="text-primary">James</span>
          <span className="dark:text-white">Developer</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNavItemClick(item.href)}
                  className={`text-sm font-medium hover:text-primary transition-colors ${
                    activeSection === item.href ? 'text-primary' : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
          
          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <SunIcon className="h-5 w-5 text-yellow-400" />
            ) : (
              <MoonIcon className="h-5 w-5 text-gray-700" />
            )}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={toggleDarkMode}
            className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <SunIcon className="h-5 w-5 text-yellow-400" />
            ) : (
              <MoonIcon className="h-5 w-5 text-gray-700" />
            )}
          </button>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg md:hidden">
            <nav className="container-custom py-4">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <button
                      onClick={() => handleNavItemClick(item.href)}
                      className={`block w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                        activeSection === item.href ? 'text-primary' : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;