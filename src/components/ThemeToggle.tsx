
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
      className="w-10 h-10 rounded-full fixed top-4 right-4 z-50 bg-gray-900/60 text-white hover:bg-gray-800/80 backdrop-blur-sm"
    >
      {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
    </Toggle>
  );
};

export default ThemeToggle;
