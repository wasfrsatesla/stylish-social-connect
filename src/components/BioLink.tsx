
import React from 'react';
import { cn } from '@/lib/utils';
import ProfileImage from './ProfileImage';
import SocialLink, { SocialPlatform } from './SocialLink';

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
          <div className="chip relative inline-block px-3 py-1 mb-2 text-xs font-medium tracking-wider text-bio-accent bg-bio-accent/10 rounded-full uppercase">
            Profile
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-1">{name}</h1>
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
          {socialLinks.map((link, index) => (
            <SocialLink
              key={`${link.platform}-${index}`}
              platform={link.platform}
              url={link.url}
              label={link.label}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-10 text-xs text-gray-400 dark:text-gray-500">
          © {new Date().getFullYear()} · البايو لينك
        </div>
      </div>
    </div>
  );
};

export default BioLink;
