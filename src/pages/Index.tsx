
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
          profileImage="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1000&auto=format&fit=crop"
          videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
          socialLinks={[
            {
              platform: 'whatsapp',
              url: 'https://wa.me/971501234567',
              label: '+971 50 123 4567'
            },
            {
              platform: 'telegram',
              url: 'https://t.me/username',
              label: '@username'
            },
            {
              platform: 'instagram',
              url: 'https://instagram.com/dxet1',
              label: '@dxet1'
            },
            {
              platform: 'x',
              url: 'https://x.com/alihaiderdex',
              label: '@alihaiderdex'
            },
            {
              platform: 'linkedin',
              url: 'https://linkedin.com/in/username',
              label: 'محمد أحمد'
            },
            {
              platform: 'website',
              url: 'https://example.com',
              label: 'الموقع الشخصي'
            },
            {
              platform: 'youtube',
              url: 'https://youtube.com/watch?v=dQw4w9WgXcQ',
              label: 'شاهد الفيديو'
            },
            {
              platform: 'email',
              url: 'contact@example.com',
              label: 'تواصل معي'
            },
            {
              platform: 'location',
              url: 'https://maps.google.com/?q=Dubai',
              label: 'دبي، الإمارات العربية المتحدة'
            }
          ]}
        />
      </div>
    </div>
  );
};

export default Index;
