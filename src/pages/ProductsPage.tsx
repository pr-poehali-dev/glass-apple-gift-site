import { useState } from "react";
import GiftCard from "@/components/GiftCard";
import { Button } from "@/components/ui/button";

type SortOption = "default" | "price-asc" | "price-desc";

const ProductsPage = () => {
  const [sortOption, setSortOption] = useState<SortOption>("default");

  const giftCards = [
    { id: 1, amount: 1000, imageSrc: "/placeholder.svg" },
    { id: 2, amount: 2500, imageSrc: "/placeholder.svg" },
    { id: 3, amount: 5000, imageSrc: "/placeholder.svg" }
  ];

  const sortedCards = [...giftCards].sort((a, b) => {
    if (sortOption === "price-asc") {
      return a.amount - b.amount;
    } else if (sortOption === "price-desc") {
      return b.amount - a.amount;
    }
    return 0;
  });

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-apple-text">
            Подарочные карты Apple
          </h1>
          <p className="text-lg text-apple-text/70 max-w-2xl mx-auto">
            Выберите подходящий номинал для пополнения счета в App Store и iTunes Store
          </p>
        </div>

        <div className="glass rounded-lg p-4 mb-8 flex justify-end">
          <select
            className="bg-transparent border-none text-apple-text focus:outline-none focus:ring-0"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value as SortOption)}
          >
            <option value="default">По умолчанию</option>
            <option value="price-asc">По возрастанию цены</option>
            <option value="price-desc">По убыванию цены</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedCards.map((card) => (
            <GiftCard
              key={card.id}
              amount={card.amount}
              imageSrc={card.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;