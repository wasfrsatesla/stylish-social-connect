
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ProfileImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="relative">
      <div className={cn(
        "relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden",
        "ring-4 ring-white dark:ring-[#333] shadow-xl", 
        "transition-all duration-700 ease-out animate-float",
        className
      )}>
        {!isLoaded && !error && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse-subtle rounded-full" />
        )}
        
        {error && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-500">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="8" r="4" fill="currentColor" />
              <path d="M12 12C8.13401 12 5 15.134 5 19H19C19 15.134 15.866 12 12 12Z" fill="currentColor" />
            </svg>
          </div>
        )}
        
        {!error && (
          <img
            src={src}
            alt={alt}
            className={cn(
              "w-full h-full object-cover transition-opacity duration-700",
              isLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={() => setIsLoaded(true)}
            onError={() => setError(true)}
          />
        )}
      </div>
      
      {/* Decorative ring/blur effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur-md opacity-30 -z-10" />
    </div>
  );
};

export default ProfileImage;
