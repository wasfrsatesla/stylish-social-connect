import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Instagram, Send, MessageSquare, Globe, Link2 
} from 'lucide-react';

export type SocialPlatform = 'whatsapp' | 'telegram' | 'instagram' | 'tellonym';

interface SocialLinkProps {
  platform: SocialPlatform;
  url: string;
  label?: string;
  className?: string;
  index?: number;
  iconOnly?: boolean;
}

const getIcon = (platform: SocialPlatform) => {
  switch (platform) {
    case 'instagram': return <Instagram className="h-5 w-5" />;
    case 'whatsapp': return <MessageSquare className="h-5 w-5 text-green-500" />;
    case 'telegram': return <Send className="h-5 w-5 text-blue-500" />;
    case 'tellonym': return <Globe className="h-5 w-5 text-pink-500" />;
    default: return <Link2 className="h-5 w-5" />;
  }
};

const getPlatformName = (platform: SocialPlatform): string => {
  switch (platform) {
    case 'instagram': return 'Instagram';
    case 'whatsapp': return 'WhatsApp';
    case 'telegram': return 'Telegram';
    case 'tellonym': return 'Tellonym';
    default: return 'Link';
  }
};

const SocialLink: React.FC<SocialLinkProps> = ({ 
  platform, 
  url, 
  label, 
  className,
  index = 0,
  iconOnly = false
}) => {
  const displayLabel = label || getPlatformName(platform);
  const delay = `animate-delay-${(index % 5) * 100}`;

  const getPlatformColorClass = () => {
    switch (platform) {
      case 'instagram': return 'bg-gradient-to-br from-purple-500 to-pink-500';
      case 'whatsapp': return 'bg-green-500';
      case 'telegram': return 'bg-blue-500';
      case 'tellonym': return 'bg-pink-500';
      default: return 'bg-gray-600';
    }
  };

  if (iconOnly) {
    return (
      <a 
        href={url}
        target="_blank" 
        rel="noopener noreferrer"
        title={displayLabel}
        className={cn(
          "flex items-center justify-center rounded-full w-14 h-14 shadow-md",
          getPlatformColorClass(),
          "text-white hover:scale-110 transition-all duration-300 ease-out",
          "animate-slide-up", delay,
          className
        )}
      >
        {getIcon(platform)}
      </a>
    );
  }

  return (
    <a 
      href={url}
      target="_blank" 
      rel="noopener noreferrer"
      className={cn(
        "group flex items-center gap-4 p-4 rounded-2xl",
        "bg-white/20 dark:bg-[#222]/60 backdrop-blur-sm",
        "border border-white/20 dark:border-gray-800/80",
        "hover:shadow-md hover:scale-[1.02] hover:bg-gradient-to-r",
        "transition-all duration-300 ease-out cursor-pointer",
        "animate-slide-up", delay,
        className
      )}
    >
      <div className="social-icon">
        {getIcon(platform)}
      </div>
      <div className="flex flex-col">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {getPlatformName(platform)}
        </span>
        <span className="font-medium group-hover:text-white dark:group-hover:text-white transition-colors duration-300">
          {displayLabel}
        </span>
      </div>
    </a>
  );
};

export default SocialLink;
