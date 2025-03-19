
import React from 'react';
import { cn } from '@/lib/utils';

export type SocialPlatform = 'whatsapp' | 'telegram' | 'instagram' | 'tellonym';

interface SocialLinkProps {
  platform: SocialPlatform;
  url: string;
  label?: string;
  className?: string;
  index?: number;
  iconOnly?: boolean;
}

const getPlatformName = (platform: SocialPlatform) => {
  switch (platform) {
    case 'instagram': return 'Instagram';
    case 'whatsapp': return 'WhatsApp';
    case 'telegram': return 'Telegram';
    case 'tellonym': return 'Tellonym';
    default: return 'Link';
  }
};

const getIcon = (platform: SocialPlatform) => {
  switch (platform) {
    case 'instagram': return '/instagram.svg';
    case 'whatsapp': return '/whatsapp.svg';
    case 'telegram': return '/telegram.svg';
    case 'tellonym': return '/tellonym.svg';
    default: return '/link.svg';
  }
};

const getPlatformColor = (platform: SocialPlatform) => {
  switch (platform) {
    case 'instagram': return 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)';
    case 'whatsapp': return '#25D366';
    case 'telegram': return '#0088cc';
    case 'tellonym': return '#2078F4';
    default: return '#000000';
  }
};

const SocialLink: React.FC<SocialLinkProps> = ({ 
  platform, 
  url, 
  className,
  index = 0,
  iconOnly = false
}) => {
  const delay = `animate-delay-${(index % 5) * 100}`;
  const platformName = getPlatformName(platform);
  const platformColor = getPlatformColor(platform);

  return (
    <div className="flex flex-col items-center gap-2">
      <a 
        href={url}
        target="_blank" 
        rel="noopener noreferrer"
        aria-label={platform}
        className={cn(
          "flex items-center justify-center rounded-full w-14 h-14 sm:w-16 sm:h-16",
          "hover:scale-110 hover:shadow-lg",
          "border border-gray-800 light-theme:border-gray-200",
          "shadow-lg shadow-black/20 light-theme:shadow-gray-300/30",
          "transition-all duration-300 ease-out",
          "animate-fade-in hover:rotate-6", delay,
          className
        )}
        style={{ background: platformColor }}
      >
        <img src={getIcon(platform)} alt={platformName} className="w-7 h-7 filter invert" />
      </a>
      <span className={cn(
        "text-xs font-medium text-gray-400 light-theme:text-gray-600 animate-fade-in",
        delay
      )}>
        {platformName}
      </span>
    </div>
  );
};

export default SocialLink;
