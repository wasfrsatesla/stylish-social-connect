
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Instagram, SendHorizontal, MessageSquare, Globe, Link2, Twitter
} from 'lucide-react';

export type SocialPlatform = 'whatsapp' | 'telegram' | 'instagram' | 'tellonym' | 'twitter';

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
    case 'twitter': return 'Twitter';
    default: return 'Link';
  }
};

const getIcon = (platform: SocialPlatform) => {
  switch (platform) {
    case 'instagram': return <Instagram className="h-5 w-5" />;
    case 'whatsapp': return <MessageSquare className="h-5 w-5" />;
    case 'telegram': return <SendHorizontal className="h-5 w-5" />;
    case 'tellonym': return <Globe className="h-5 w-5" />;
    case 'twitter': return <Twitter className="h-5 w-5" />;
    default: return <Link2 className="h-5 w-5" />;
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

  return (
    <div className="flex flex-col items-center gap-2">
      <a 
        href={url}
        target="_blank" 
        rel="noopener noreferrer"
        aria-label={platform}
        className={cn(
          "flex items-center justify-center rounded-full w-14 h-14 sm:w-16 sm:h-16",
          "bg-gray-900 text-white hover:scale-110 hover:bg-gray-800",
          "light-theme:bg-gray-100 light-theme:text-gray-900 light-theme:hover:bg-gray-200",
          "shadow-lg shadow-black/20 light-theme:shadow-gray-300/30 border border-gray-800 light-theme:border-gray-200",
          "transition-all duration-300 ease-out",
          "animate-fade-in hover:rotate-6", delay,
          className
        )}
      >
        {getIcon(platform)}
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
