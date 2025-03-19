
import React, { useEffect, useState } from 'react';
import BioLink from '@/components/BioLink';
import ThemeToggle from '@/components/ThemeToggle';

const Index: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#121212] dark:bg-[#121212] light-theme:bg-[#f5f5f7] transition-colors duration-500 p-4">
      {/* Subtle noise texture overlay */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAzIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20 dark:opacity-20 light-theme:opacity-10" />
      
      {/* Theme Toggle */}
      <ThemeToggle />
      
      <div className={`flex flex-col items-center justify-center w-full max-w-3xl transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {/* BioLink component */}
        <BioLink
          name="Sajid Majid"
          title="طالب هندسة نفط"
          bio="صبرًا فما نيل المُنى سهل المُراد."
          profileImage="https://d.top4top.io/p_3364fzsln1.jpg"
          videoUrl="https://www.youtube.com/embed/yIqZaMhwIh4?si=qo5bEkXML7QIVMIR"
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
