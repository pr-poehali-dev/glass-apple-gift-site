import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-apple-text">
            Подарочные карты Apple
          </h1>
          
          <p className="text-lg md:text-xl text-apple-text/80 mb-10">
            Идеальный подарок для любителей приложений, игр, музыки, книг и многого другого в App Store и iTunes Store
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-apple-blue hover:bg-apple-blue/90 text-white rounded-full px-8 py-6 text-base"
            >
              <Link to="/products">
                Выбрать карту
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              className="border-apple-blue text-apple-blue hover:bg-apple-blue/10 hover:text-apple-blue rounded-full px-8 py-6 text-base"
            >
              <Link to="/how-to-use">
                Как использовать
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Декоративные элементы */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-apple-blue/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-apple-blue/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;