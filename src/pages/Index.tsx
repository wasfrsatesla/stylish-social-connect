
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black p-4 transition-opacity duration-700 ease-in-out">
      {/* خلفية محببة دقيقة */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30 dark:opacity-10" />
      
      <div className={`flex flex-col items-center justify-center w-full max-w-5xl transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {/* بايو لينك */}
        <BioLink
          name="محمد أحمد"
          title="مطور ومصمم مواقع"
          bio="مرحبًا! أنا مطور ومصمم مواقع إلكترونية. أساعد الشركات على بناء تواجد رقمي رائع."
          profileImage="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1000&auto=format&fit=crop"
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
              url: 'https://instagram.com/username',
              label: '@username'
            },
            {
              platform: 'twitter',
              url: 'https://twitter.com/username',
              label: '@username'
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
