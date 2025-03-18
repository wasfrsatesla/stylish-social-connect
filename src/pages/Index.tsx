import React, { useEffect, useState } from 'react';
import BioLink from '@/components/BioLink';

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
        <BioLink
          name="Sajid Majid"
          title="طالب هندسة نفط"
          bio="صبرًا فما نيل المُنى سهل المُراد."
          profileImage="https://d.top4top.io/p_3364fzsln1.jpg"
          videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
          socialLinks={[
            {
              platform: 'whatsapp',
              url: 'https://wa.me/9647746883161',
              label: '+9647746883161'
            },
            {
              platform: 'telegram',
              url: 'https://t.me/S5_d2',
              label: '@S5_d2'
            },
            {
              platform: 'instagram',
              url: 'https://instagram.com/sd.5o',
              label: '@sd.5o'
            },
            {
              platform: 'tellonym',
              url: 'https://tellonym.me/sd.5o/risky',
              label: '@sd.5o'
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Index;
