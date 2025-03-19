
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
        "relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden",
        "ring-2 ring-gray-800 shadow-xl", 
        "transition-all duration-700 ease-out",
        className
      )}>
        {!isLoaded && !error && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse-subtle rounded-full" />
        )}
        
        {error && (
          <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-600">
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
      
      {/* Decorative glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-md opacity-70 -z-10" />
    </div>
  );
};

export default ProfileImage;
