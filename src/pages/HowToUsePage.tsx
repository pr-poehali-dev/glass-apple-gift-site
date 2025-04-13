import { Check } from "lucide-react";

const HowToUsePage = () => {
  const steps = [
    {
      id: 1,
      title: "Выберите подарочную карту",
      description: "Выберите подарочную карту нужного номинала в нашем магазине"
    },
    {
      id: 2,
      title: "Оплатите заказ",
      description: "Оплатите заказ любым удобным способом и получите код активации"
    },
    {
      id: 3,
      title: "Откройте App Store",
      description: "Запустите App Store на своем устройстве Apple"
    },
    {
      id: 4,
      title: "Войдите в аккаунт",
      description: "Убедитесь, что вы вошли в свой Apple ID"
    },
    {
      id: 5,
      title: "Активируйте код",
      description: "Нажмите на свой профиль, выберите 'Активировать карту или код' и введите полученный код"
    },
    {
      id: 6,
      title: "Готово!",
      description: "Средства будут сразу же зачислены на ваш аккаунт Apple ID"
    }
  ];

  const faqs = [
    {
      question: "Как долго действует подарочная карта?",
      answer: "Подарочные карты Apple не имеют срока действия и могут быть использованы в любое время."
    },
    {
      question: "Могу ли я использовать подарочную карту для оплаты Apple One?",
      answer: "Да, подарочную карту можно использовать для оплаты подписки Apple One."
    },
    {
      question: "Можно ли вернуть или обменять подарочную карту?",
      answer: "К сожалению, подарочные карты не подлежат возврату или обмену после покупки."
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-apple-text">
            Как использовать подарочную карту Apple
          </h1>
          <p className="text-lg text-apple-text/70 max-w-2xl mx-auto">
            Простая инструкция по активации и использованию подарочных карт App Store и iTunes
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-8 text-apple-text">
              Пошаговая инструкция
            </h2>
            
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.id} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-apple-blue flex items-center justify-center text-white font-medium">
                    {step.id}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-1 text-apple-text">{step.title}</h3>
                    <p className="text-apple-text/70">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-8 text-apple-text">
              Часто задаваемые вопросы
            </h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-none last:pb-0">
                  <h3 className="text-xl font-medium mb-2 text-apple-text">{faq.question}</h3>
                  <p className="text-apple-text/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToUsePage;