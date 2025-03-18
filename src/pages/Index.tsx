import React, { useEffect, useState } from 'react';

const Index: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // تأثير حركي بسيط عند تحميل الصفحة
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-green-950 p-4 transition-opacity duration-700 ease-in-out">
      {/* خلفية محببة دقيقة */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30 dark:opacity-10" />
      
      <div className={`flex flex-col items-center justify-center w-full max-w-5xl transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {/* بايو لينك */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">مرحبًا بك في موقعي!</h1>
          <p className="text-white mb-4">تواصل معي عبر الروابط أدناه:</p>

          <div className="flex space-x-6 justify-center mb-8">
            <a href="https://wa.me/9647746883161" target="_blank" rel="noopener noreferrer" className="text-white">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Whatsapp_Logo_2022.png/800px-Whatsapp_Logo_2022.png" alt="WhatsApp" className="w-10 h-10 rounded-full shadow-lg" />
            </a>
            <a href="https://t.me/S5_d2" target="_blank" rel="noopener noreferrer" className="text-white">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Telegram_logo_2022.svg/800px-Telegram_logo_2022.svg.png" alt="Telegram" className="w-10 h-10 rounded-full shadow-lg" />
            </a>
            <a href="https://instagram.com/sd.5o" target="_blank" rel="noopener noreferrer" className="text-white">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="w-10 h-10 rounded-full shadow-lg" />
            </a>
            <a href="https://tellonym.me/sd.5o/risky" target="_blank" rel="noopener noreferrer" className="text-white">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Tellonym_logo.svg/1200px-Tellonym_logo.svg.png" alt="Tellonym" className="w-10 h-10 rounded-full shadow-lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

};

export default Index;
