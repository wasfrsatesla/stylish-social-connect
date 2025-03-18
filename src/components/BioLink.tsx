
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
      <div className="bio-link p-8 flex flex-col items-center animate-scale-in">
        <div className="mb-6">
          <ProfileImage 
            src={profileImage} 
            alt={`${name}'s profile picture`} 
          />
        </div>
        
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">{name}</h1>
          {title && (
            <h2 className="text-bio-muted dark:text-gray-400 text-lg mb-4">{title}</h2>
          )}
          {bio && (
            <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto leading-relaxed">
              {bio}
            </p>
          )}
        </div>
        
        {/* Video preview if available */}
        {videoUrl && (
          <div className="w-full mb-6 rounded-2xl overflow-hidden shadow-lg">
            <iframe 
              src={videoUrl} 
              className="w-full aspect-video rounded-2xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        )}
        
        {/* Social Icons Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4 w-full max-w-lg my-6">
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
        
        <div className="mt-10 text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} · تم التطوير بواسطة ALIHAIDERSHAKER
        </div>
      </div>
    </div>
  );
};

export default BioLink;
