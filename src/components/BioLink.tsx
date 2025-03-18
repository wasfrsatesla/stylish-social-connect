
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import ProfileImage from './ProfileImage';
import SocialLink, { SocialPlatform } from './SocialLink';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label?: string;
}

interface BioLinkProps {
  name: string;
  title?: string;
  bio?: string;
  profileImage: string;
  socialLinks: SocialLink[];
  className?: string;
}

const BioLink: React.FC<BioLinkProps> = ({
  name,
  title,
  bio,
  profileImage,
  socialLinks,
  className
}) => {
  // State to control link visibility
  const [showAllLinks, setShowAllLinks] = useState(false);
  const visibleLinks = showAllLinks ? socialLinks : socialLinks.slice(0, 4);
  
  const toggleLinks = () => {
    setShowAllLinks(!showAllLinks);
  };
  
  return (
    <div className={cn("flex flex-col items-center w-full p-4", className)}>
      <div className="bio-link p-8 flex flex-col items-center animate-scale-in">
        <div className="mb-6">
          <ProfileImage 
            src={profileImage} 
            alt={`${name}'s profile picture`} 
          />
        </div>
        
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">{name}</h1>
          {title && (
            <h2 className="text-bio-muted dark:text-gray-400 text-lg mb-4">{title}</h2>
          )}
          {bio && (
            <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto leading-relaxed">
              {bio}
            </p>
          )}
        </div>
        
        <div className="w-full space-y-3">
          {visibleLinks.map((link, index) => (
            <SocialLink
              key={`${link.platform}-${index}`}
              platform={link.platform}
              url={link.url}
              label={link.label}
              index={index}
            />
          ))}
          
          {socialLinks.length > 4 && (
            <button 
              onClick={toggleLinks}
              className="w-full flex items-center justify-center gap-2 p-3 mt-4 rounded-2xl
                bg-purple-600/20 backdrop-blur-sm text-purple-800 dark:text-purple-300
                hover:bg-purple-700/30 transition-all duration-300 border border-purple-400/30"
            >
              <span>{showAllLinks ? 'عرض روابط أقل' : 'عرض كل الروابط'}</span>
              {showAllLinks ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          )}
        </div>
        
        <div className="mt-10 text-xs text-gray-400 dark:text-gray-500">
          © {new Date().getFullYear()} · {name}
        </div>
      </div>
    </div>
  );
};

export default BioLink;
