
import React from 'react';
import { cn } from '@/lib/utils';
import ProfileImage from './ProfileImage';
import SocialLink, { SocialPlatform } from './SocialLink';

interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label?: string;
  hidden?: boolean;
}

interface BioLinkProps {
  name: string;
  title?: string;
  bio?: string;
  profileImage: string;
  socialLinks: SocialLink[];
  videoUrl?: string;
  className?: string;
}

const BioLink: React.FC<BioLinkProps> = ({
  name,
  title,
  bio,
  profileImage,
  socialLinks,
  videoUrl,
  className
}) => {
  return (
    <div className={cn("flex flex-col items-center w-full p-4", className)}>
      <div className="bio-link-dark p-8 sm:p-10 flex flex-col items-center animate-fade-in">
        <div className="mb-6">
          <ProfileImage 
            src={profileImage} 
            alt={`${name}'s profile picture`} 
            className="w-24 h-24 sm:w-28 sm:h-28"
          />
        </div>
        
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-1 name-gradient animate-pulse-subtle">{name}</h1>
          {title && (
            <h2 className="text-light-primary dark:text-gray-400 text-lg mb-4 transition-colors duration-300">{title}</h2>
          )}
          {bio && (
            <p className="text-light-primary dark:text-gray-500 max-w-md mx-auto leading-relaxed transition-colors duration-300 cursor-default hover:scale-105 transform transition-transform">
              {bio}
            </p>
          )}
        </div>
        
        {/* Video preview if available */}
        {videoUrl && (
          <div className="w-full mb-8 rounded-xl overflow-hidden border light-theme:border-gray-200 dark:border-gray-800 animate-fade-in animate-delay-200 hover:shadow-lg transition-all duration-500">
            <iframe 
              src={videoUrl} 
              className="w-full aspect-video rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        )}
        
        {/* Social Icons Grid with platform names */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 w-full max-w-xs sm:max-w-md mx-auto my-6">
          {socialLinks.map((link, index) => (
            <SocialLink
              key={`${link.platform}-${index}`}
              platform={link.platform}
              url={link.url}
              iconOnly={true}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-8 text-xs light-theme:text-gray-600 dark:text-gray-600 hover:text-light-primary dark:hover:text-gray-500 transition-colors duration-300">
           {new Date().getFullYear()} 
        </div>
      </div>
    </div>
  );
};

export default BioLink;
