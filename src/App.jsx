import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Category from './pages/Category';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    const headerComponent = <Header currentPage={currentPage} onNavigate={handleNavigate} />;
    switch (currentPage) {
      case 'home':
        return <Home header={headerComponent} onNavigate={handleNavigate} />;
      case 'about':
        return <About header={headerComponent} onNavigate={handleNavigate} />;
      case 'services':
        return <Services header={headerComponent} onNavigate={handleNavigate} />;
      case 'products':
        return <Products header={headerComponent} onNavigate={handleNavigate} />;
      case 'category':
        return <Category header={headerComponent} onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact header={headerComponent} onNavigate={handleNavigate} />;
      default:
        return <Home header={headerComponent} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;