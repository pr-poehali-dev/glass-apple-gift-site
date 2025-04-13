import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-apple-text font-medium mb-4">Apple Gift</h3>
            <p className="text-sm text-apple-text/70">
              Подарочные карты для App Store и iTunes Store на любой случай.
            </p>
          </div>
          
          <div>
            <h3 className="text-apple-text font-medium mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-apple-text/70 hover:text-apple-blue transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-apple-text/70 hover:text-apple-blue transition-colors">
                  Карты
                </Link>
              </li>
              <li>
                <Link to="/how-to-use" className="text-sm text-apple-text/70 hover:text-apple-blue transition-colors">
                  Как использовать
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-apple-text font-medium mb-4">Контакты</h3>
            <p className="text-sm text-apple-text/70">
              Для связи: support@applegift.ru
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-sm text-apple-text/70 text-center">
          © {currentYear} Apple Gift. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;