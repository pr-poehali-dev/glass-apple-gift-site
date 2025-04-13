import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface GiftCardProps {
  amount: number;
  imageSrc: string;
  className?: string;
}

const GiftCard = ({ amount, imageSrc, className }: GiftCardProps) => {
  return (
    <div 
      className={cn(
        "glass rounded-2xl p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg", 
        className
      )}
    >
      <div className="relative w-full h-48 mb-5">
        <img 
          src={imageSrc || "/placeholder.svg"} 
          alt={`Apple Gift Card ${amount} ₽`}
          className="w-full h-full object-contain" 
        />
      </div>
      
      <h3 className="text-xl font-medium text-apple-text mb-3">
        {amount.toLocaleString('ru-RU')} ₽
      </h3>
      
      <p className="text-apple-text/70 text-sm mb-5 text-center">
        Подарочная карта App Store & iTunes
      </p>
      
      <Button 
        className="bg-apple-blue hover:bg-apple-blue/90 rounded-full px-6"
      >
        Купить
      </Button>
    </div>
  );
};

export default GiftCard;