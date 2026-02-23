import { Menu } from 'lucide-react';
import '../styles/Header.css';

export default function Header({ currentPage, onNavigate }) {
  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Services', path: 'services' },
    { name: 'Our Products', path: 'products' },
    { name: 'Contact Us', path: 'contact' },
  ];

  return (
    <header className="header-container">
      <div className="header-content">
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

            <button className="mobile-menu-button">
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}