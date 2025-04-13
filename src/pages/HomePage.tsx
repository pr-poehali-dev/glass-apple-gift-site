import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import GiftCard from "@/components/GiftCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      
      <FeatureSection />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-apple-text">
            Популярные номиналы
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <GiftCard 
              amount={1000} 
              imageSrc="/placeholder.svg" 
            />
            
            <GiftCard 
              amount={2500} 
              imageSrc="/placeholder.svg" 
            />
            
            <GiftCard 
              amount={5000} 
              imageSrc="/placeholder.svg" 
            />
          </div>
          
          <div className="text-center">
            <Button 
              asChild
              className="bg-apple-blue hover:bg-apple-blue/90 text-white rounded-full px-8 py-6 text-base"
            >
              <Link to="/products">
                Смотреть все карты
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;