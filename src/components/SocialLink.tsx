
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Instagram, Facebook, Twitter, Linkedin, Globe, Mail, 
  Github, Youtube, Music, Twitch, ExternalLink, MapPin,
  MessageSquare, Send, Phone, Hash, Link2, Navigation
} from 'lucide-react';

export type SocialPlatform = 
  'instagram' | 'facebook' | 'twitter' | 'linkedin' | 
  'website' | 'email' | 'github' | 'youtube' | 
  'music' | 'twitch' | 'other' | 'location' |
  'whatsapp' | 'telegram' | 'x';

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
    case 'facebook': return <Facebook className="h-5 w-5" />;
    case 'twitter': return <Twitter className="h-5 w-5" />;
    case 'x': return <div className="text-xl font-bold">𝕏</div>;
    case 'linkedin': return <Linkedin className="h-5 w-5" />;
    case 'website': return <Globe className="h-5 w-5" />;
    case 'email': return <Mail className="h-5 w-5" />;
    case 'github': return <Github className="h-5 w-5" />;
    case 'youtube': return <Youtube className="h-5 w-5 text-red-500" />;
    case 'music': return <Music className="h-5 w-5" />;
    case 'twitch': return <Twitch className="h-5 w-5 text-purple-500" />;
    case 'location': return <Navigation className="h-5 w-5 text-blue-500" />;
    case 'whatsapp': return <MessageSquare className="h-5 w-5 text-green-500" />;
    case 'telegram': return <Send className="h-5 w-5 text-blue-500" />;
    default: return <Link2 className="h-5 w-5" />;
  }
};

const getPlatformName = (platform: SocialPlatform): string => {
  switch (platform) {
    case 'instagram': return 'Instagram';
    case 'facebook': return 'Facebook';
    case 'twitter': return 'Twitter';
    case 'x': return 'X';
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
  index = 0,
  iconOnly = false
}) => {
  const displayLabel = label || getPlatformName(platform);
  const delay = `animate-delay-${(index % 5) * 100}`;
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (platform === 'email') {
      e.preventDefault();
      window.location.href = `mailto:${url}`;
    }
  };

  // Get platform-specific styling
  const getPlatformColorClass = () => {
    switch (platform) {
      case 'instagram': return 'bg-gradient-to-br from-purple-500 to-pink-500';
      case 'facebook': return 'bg-blue-600';
      case 'twitter': return 'bg-blue-400';
      case 'x': return 'bg-black';
      case 'whatsapp': return 'bg-green-500';
      case 'telegram': return 'bg-blue-500';
      case 'linkedin': return 'bg-blue-700';
      case 'youtube': return 'bg-red-600';
      case 'location': return 'bg-blue-500';
      case 'email': return 'bg-gray-600';
      case 'website': return 'bg-green-600';
      case 'github': return 'bg-gray-800';
      case 'music': return 'bg-pink-600';
      case 'twitch': return 'bg-purple-600';
      default: return 'bg-green-600';
    }
  };

  // For icon-only mode
  if (iconOnly) {
    return (
      <a 
        href={platform === 'email' ? `mailto:${url}` : url}
        target={platform === 'email' ? '_self' : '_blank'} 
        rel="noopener noreferrer"
        onClick={handleClick}
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

  // Default for non-icon-only mode
  return (
    <a 
      href={platform === 'email' ? `mailto:${url}` : url}
      target={platform === 'email' ? '_self' : '_blank'} 
      rel="noopener noreferrer"
      onClick={handleClick}
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
