import { Gift, Music, Gamepad2 } from "lucide-react";

const FeatureSection = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-apple-text">
          Почему стоит выбрать Apple Gift карты
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass rounded-2xl p-8 text-center">
            <div className="mx-auto mb-5 w-14 h-14 flex items-center justify-center bg-apple-blue/10 rounded-full">
              <Gift className="w-6 h-6 text-apple-blue" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-apple-text">Идеальный подарок</h3>
            <p className="text-apple-text/70">
              Подарите близким доступ к миллионам приложений, игр, музыки и фильмов.
            </p>
          </div>
          
          <div className="glass rounded-2xl p-8 text-center">
            <div className="mx-auto mb-5 w-14 h-14 flex items-center justify-center bg-apple-blue/10 rounded-full">
              <Music className="w-6 h-6 text-apple-blue" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-apple-text">Музыка и развлечения</h3>
            <p className="text-apple-text/70">
              Открывайте доступ к Apple Music, фильмам и сериалам в iTunes Store.
            </p>
          </div>
          
          <div className="glass rounded-2xl p-8 text-center">
            <div className="mx-auto mb-5 w-14 h-14 flex items-center justify-center bg-apple-blue/10 rounded-full">
              <Gamepad2 className="w-6 h-6 text-apple-blue" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-apple-text">Игры и приложения</h3>
            <p className="text-apple-text/70">
              Приобретайте популярные игры и приложения в App Store.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;