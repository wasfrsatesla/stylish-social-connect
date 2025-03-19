
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import { useTheme } from '@/hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Toggle 
      pressed={theme === 'dark'} 
      onPressedChange={toggleTheme}
      aria-label="Toggle theme"
      className="w-12 h-12 rounded-full fixed top-4 right-4 z-50 bg-gray-900/70 light-theme:bg-white/70 text-white light-theme:text-gray-900 hover:bg-gray-800/80 light-theme:hover:bg-gray-100/80 backdrop-blur-sm shadow-lg border border-gray-700 light-theme:border-gray-200 transition-all duration-300"
    >
      {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
    </Toggle>
  );
};

export default ThemeToggle;
