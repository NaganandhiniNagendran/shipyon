import { ShoppingCart, Search, User, Menu } from 'lucide-react';

export default function Header({ currentPage, onNavigate }) {
  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Services', path: 'services' },
    { name: 'Products', path: 'products' },
    { name: 'Contact', path: 'contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 header-container">
      <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8 header-content">
        <div className="flex justify-between items-center h-20 header-inner">
          <div
            className="flex items-center cursor-pointer logo-container"
            onClick={() => onNavigate('home')}
          >
            <div className="w-12 h-12 bg-primary-dark-green rounded-lg flex items-center justify-center logo-box">
              <span className="text-white font-bold text-xl logo-text">SY</span>
            </div>
            <div className="ml-3 brand-info">
              <h1 className="text-xl font-bold text-text-dark brand-name">Shipyon</h1>
              <p className="text-xs text-gray-500 brand-subtitle">Trade & Sourcing Co.</p>
            </div>
          </div>

          <nav className="hidden md-flex items-center navigation">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className={`text-sm font-medium nav-pill ${currentPage === item.path
                  ? 'active-nav-pill'
                  : 'text-text-dark'
                  }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4 header-actions">
            <button className="action-btn-circle action-button">
              <Search className="w-5 h-5 text-text-dark action-icon" />
            </button>
            <button className="action-btn-circle action-button">
              <User className="w-5 h-5 text-text-dark action-icon" />
            </button>
            <button className="action-btn-circle relative cart-button">
              <ShoppingCart className="w-5 h-5 text-text-dark cart-icon" />
              <span className="cart-badge-premium">3</span>
            </button>
            <button className="md-hidden p-2 mobile-menu-button">
              <Menu className="w-6 h-6 text-text-dark mobile-menu-icon" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}