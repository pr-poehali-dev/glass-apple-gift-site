import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetTitle,
  SheetClose
} from "@/components/ui/sheet";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  // Закрываем сайдбар при изменении маршрута
  useEffect(() => {
    setIsSheetOpen(false);
  }, [location.pathname]);

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

  const NavLinks = ({ onLinkClick }: { onLinkClick?: () => void }) => (
    <>
      <Link 
        to="/" 
        className="text-apple-text hover:text-apple-blue transition-colors duration-200"
        onClick={onLinkClick}
      >
        Главная
      </Link>
      <Link 
        to="/products" 
        className="text-apple-text hover:text-apple-blue transition-colors duration-200"
        onClick={onLinkClick}
      >
        Карты
      </Link>
      <Link 
        to="/how-to-use" 
        className="text-apple-text hover:text-apple-blue transition-colors duration-200"
        onClick={onLinkClick}
      >
        Как использовать
      </Link>
    </>
  );

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-apple-text font-medium text-2xl">
          Apple Gift
        </Link>
        
        {isMobile ? (
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <button 
                aria-label="Открыть меню" 
                className="text-apple-text hover:text-apple-blue"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <SheetTitle className="text-xl mb-6">Меню</SheetTitle>
              <div className="flex flex-col gap-6">
                <NavLinks onLinkClick={() => setIsSheetOpen(false)} />
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center gap-8">
            <NavLinks />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;