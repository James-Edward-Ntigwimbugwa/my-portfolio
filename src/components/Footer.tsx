import { ArrowUpIcon } from '@heroicons/react/24/outline';
import { scrollTo } from '../utils/scrollTo';
import { navItems } from '../data/navItems';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="container-custom">
        {/* Scroll to top button */}
        <button
          onClick={() => scrollTo('home')}
          className="fixed bottom-6 right-6 p-3 bg-primary rounded-full shadow-lg hover:bg-primary-dark transition-colors"
        >
          <ArrowUpIcon className="w-5 h-5" />
        </button>

        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-bold mb-4 inline-block">
              <span className="text-primary">John</span>Developer
            </a>
            <p className="text-gray-400 max-w-md">
              Building digital experiences that matter.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <button
                      onClick={() => scrollTo(item.href)} 
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} John Smith. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              Medium
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;