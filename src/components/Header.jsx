import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/Header.css';

export default function Header({ currentPage, onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Services', path: 'services' },
    { name: 'Our Products', path: 'products' },
    { name: 'Contact Us', path: 'contact' },
  ];

  const handleNav = (path) => {
    setIsMobileMenuOpen(false);
    onNavigate(path);
  };

  return (
    <header className="header-container">
      <div className="header-content relative">
        <div className="header-wrapper">
          <div className="header-inner">
            <div
              className="logo-container"
              onClick={() => onNavigate('home')}
            >
              <h1 className="logo-text">Shipyo</h1>
            </div>

            <nav className="navigation">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => onNavigate(item.path)}
                  className={`nav-button ${currentPage === item.path ? 'active' : ''}`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            <button
              className="mobile-menu-button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */
          isMobileMenuOpen && (
            <div className="mobile-navigation-dropdown absolute top-full right-4 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 py-3 px-2 z-50 flex flex-col items-end">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNav(item.path)}
                  className={`w-full text-right py-2.5 px-3 mb-1 font-medium transition-colors bg-transparent border-none rounded-lg ${currentPage === item.path
                      ? 'text-primary-dark-green font-bold bg-green-50/50'
                      : 'text-gray-700 hover:text-primary-dark-green hover:bg-gray-50'
                    }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
      </div>
    </header>
  );
}