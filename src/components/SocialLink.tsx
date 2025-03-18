
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
    case 'location': return <Navigation className="h-5 w-5" />;
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

  // Custom color classes based on platform
  const getPlatformColorClass = () => {
    switch (platform) {
      case 'instagram': return 'hover:from-pink-500 hover:to-purple-500';
      case 'facebook': return 'hover:from-blue-600 hover:to-blue-700';
      case 'twitter': return 'hover:from-blue-400 hover:to-blue-500';
      case 'whatsapp': return 'hover:from-green-400 hover:to-green-600';
      case 'telegram': return 'hover:from-blue-300 hover:to-blue-500';
      case 'linkedin': return 'hover:from-blue-700 hover:to-blue-800';
      case 'youtube': return 'hover:from-red-500 hover:to-red-700';
      default: return 'hover:from-purple-400 hover:to-indigo-500';
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
        "bg-white/20 dark:bg-[#222]/60 backdrop-blur-sm",
        "border border-white/20 dark:border-gray-800/80",
        "hover:shadow-md hover:scale-[1.02] hover:bg-gradient-to-r",
        getPlatformColorClass(),
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
