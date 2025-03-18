
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import ProfileImage from './ProfileImage';
import SocialLink, { SocialPlatform } from './SocialLink';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

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
  // State to control link visibility
  const [showAllLinks, setShowAllLinks] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'all' | 'social' | 'video'>('all');
  
  // Filter links based on visibility and category
  const filteredLinks = socialLinks.filter(link => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'social' && !link.hidden) return true;
    if (activeCategory === 'video' && link.platform === 'youtube') return true;
    return false;
  });
  
  const visibleLinks = showAllLinks ? filteredLinks : filteredLinks.slice(0, 4);
  
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
        
        {/* Category Toggle */}
        <div className="mb-6 w-full max-w-sm">
          <ToggleGroup type="single" defaultValue="all" onValueChange={(value) => setActiveCategory(value as 'all' | 'social' | 'video')}>
            <ToggleGroupItem value="all" className="w-1/3">كل الروابط</ToggleGroupItem>
            <ToggleGroupItem value="social" className="w-1/3">التواصل</ToggleGroupItem>
            <ToggleGroupItem value="video" className="w-1/3">فيديو</ToggleGroupItem>
          </ToggleGroup>
        </div>
        
        {/* Video preview if available and video category selected */}
        {videoUrl && (activeCategory === 'all' || activeCategory === 'video') && (
          <div className="w-full mb-6 rounded-2xl overflow-hidden shadow-lg">
            <iframe 
              src={videoUrl} 
              className="w-full aspect-video rounded-2xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        )}
        
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
          
          {filteredLinks.length > 4 && (
            <button 
              onClick={toggleLinks}
              className="w-full flex items-center justify-center gap-2 p-3 mt-4 rounded-2xl
                bg-green-600/20 backdrop-blur-sm text-green-800 dark:text-green-300
                hover:bg-green-700/30 transition-all duration-300 border border-green-400/30"
            >
              <span>{showAllLinks ? 'إخفاء' : 'إظهار المزيد'}</span>
              {showAllLinks ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          )}
        </div>
        
        <div className="mt-10 text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} · {name} · تم التطوير بواسطة Lovable
        </div>
      </div>
    </div>
  );
};

export default BioLink;
