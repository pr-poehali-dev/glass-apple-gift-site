import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-16 px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold mb-4 text-apple-text">404</h1>
        <h2 className="text-2xl font-medium mb-6 text-apple-text">
          Страница не найдена
        </h2>
        <p className="text-apple-text/70 mb-8 max-w-md mx-auto">
          Извините, запрашиваемая вами страница не существует или была перемещена.
        </p>
        <Button 
          asChild
          className="bg-apple-blue hover:bg-apple-blue/90 text-white rounded-full px-6"
        >
          <Link to="/">
            Вернуться на главную
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;