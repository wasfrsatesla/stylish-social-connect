
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Instagram, Facebook, Twitter, Linkedin, Globe, Mail, 
  Github, Youtube, Music, Twitch, ExternalLink, MapPin,
  MessageSquare, Send
} from 'lucide-react';

export type SocialPlatform = 
  'instagram' | 'facebook' | 'twitter' | 'linkedin' | 
  'website' | 'email' | 'github' | 'youtube' | 
  'music' | 'twitch' | 'other' | 'location' |
  'whatsapp' | 'telegram';

interface SocialLinkProps {
  platform: SocialPlatform;
  url: string;
  label?: string;
  className?: string;
  index?: number;
}

const getIcon = (platform: SocialPlatform) => {
  switch (platform) {
    case 'instagram': return <Instagram className="h-5 w-5" />;
    case 'facebook': return <Facebook className="h-5 w-5" />;
    case 'twitter': return <Twitter className="h-5 w-5" />;
    case 'linkedin': return <Linkedin className="h-5 w-5" />;
    case 'website': return <Globe className="h-5 w-5" />;
    case 'email': return <Mail className="h-5 w-5" />;
    case 'github': return <Github className="h-5 w-5" />;
    case 'youtube': return <Youtube className="h-5 w-5" />;
    case 'music': return <Music className="h-5 w-5" />;
    case 'twitch': return <Twitch className="h-5 w-5" />;
    case 'location': return <MapPin className="h-5 w-5" />;
    case 'whatsapp': return <MessageSquare className="h-5 w-5" />;
    case 'telegram': return <Send className="h-5 w-5" />;
    default: return <ExternalLink className="h-5 w-5" />;
  }
};

const getPlatformName = (platform: SocialPlatform): string => {
  switch (platform) {
    case 'instagram': return 'Instagram';
    case 'facebook': return 'Facebook';
    case 'twitter': return 'Twitter';
    case 'linkedin': return 'LinkedIn';
    case 'website': return 'Website';
    case 'email': return 'Email';
    case 'github': return 'GitHub';
    case 'youtube': return 'YouTube';
    case 'music': return 'Music';
    case 'twitch': return 'Twitch';
    case 'location': return 'Location';
    case 'whatsapp': return 'WhatsApp';
    case 'telegram': return 'Telegram';
    default: return 'Link';
  }
};

const SocialLink: React.FC<SocialLinkProps> = ({ 
  platform, 
  url, 
  label, 
  className,
  index = 0
}) => {
  const displayLabel = label || getPlatformName(platform);
  const delay = `animate-delay-${(index % 5) * 100}`;
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (platform === 'email') {
      e.preventDefault();
      window.location.href = `mailto:${url}`;
    }
  };

  return (
    <a 
      href={platform === 'email' ? `mailto:${url}` : url}
      target={platform === 'email' ? '_self' : '_blank'} 
      rel="noopener noreferrer"
      onClick={handleClick}
      className={cn(
        "group flex items-center gap-4 p-4 rounded-2xl",
        "bg-white/80 dark:bg-[#222]/90 backdrop-blur-sm",
        "border border-gray-200 dark:border-gray-800",
        "hover:shadow-md hover:scale-[1.02] hover:bg-gradient-to-r hover:from-white hover:to-bio-light/60",
        "dark:hover:from-[#222] dark:hover:to-[#333]/80",
        "transition-all duration-300 ease-out cursor-pointer",
        "animate-slide-up", delay,
        className
      )}
    >
      <div className="social-icon">
        {getIcon(platform)}
      </div>
      
      <div className="flex flex-col">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {getPlatformName(platform)}
        </span>
        <span className="font-medium group-hover:text-bio-accent transition-colors duration-300">
          {displayLabel}
        </span>
      </div>
    </a>
  );
};

export default SocialLink;
