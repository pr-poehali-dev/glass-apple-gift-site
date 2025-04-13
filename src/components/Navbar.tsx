import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-apple-text font-medium text-2xl">
          Apple Gift
        </Link>
        
        <div className="flex items-center gap-8">
          <Link 
            to="/" 
            className="text-apple-text hover:text-apple-blue transition-colors duration-200"
          >
            Главная
          </Link>
          <Link 
            to="/products" 
            className="text-apple-text hover:text-apple-blue transition-colors duration-200"
          >
            Карты
          </Link>
          <Link 
            to="/how-to-use" 
            className="text-apple-text hover:text-apple-blue transition-colors duration-200"
          >
            Как использовать
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;