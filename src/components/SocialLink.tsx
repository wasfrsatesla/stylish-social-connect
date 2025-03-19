
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
    case 'whatsapp': return <MessageSquare className="h-5 w-5" />;
    case 'telegram': return <Send className="h-5 w-5" />;
    case 'tellonym': return <Globe className="h-5 w-5" />;
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

  return (
    <a 
      href={url}
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={platform}
      className={cn(
        "flex items-center justify-center rounded-full w-12 h-12 sm:w-14 sm:h-14",
        "bg-gray-900 text-white hover:scale-110 hover:bg-gray-800",
        "shadow-lg shadow-black/20 border border-gray-800",
        "transition-all duration-300 ease-out",
        "animate-fade-in", delay,
        className
      )}
    >
      {getIcon(platform)}
    </a>
  );
};

export default SocialLink;
