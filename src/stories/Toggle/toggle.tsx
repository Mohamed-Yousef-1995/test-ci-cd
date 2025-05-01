import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Typography } from '@mui/material';
import React, { useState } from 'react';

interface ToggleProps {
  languages: string[];
  initialLanguageIndex?: number;
  size?: 'small' | 'medium' | 'large'; // New size prop for card width
  showText?: boolean; // Prop to conditionally show text
}

const Toggle: React.FC<ToggleProps> = ({ languages, initialLanguageIndex = 0, size = 'medium', showText = true }) => {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(initialLanguageIndex);

  const handleLanguageChange = () => {
    setCurrentLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
  };

  const isEnglish = languages[currentLanguageIndex] === 'English';

  // Size classes for card width based on the `size` prop
  const sizeClasses = {
    small: 'w-96',
    medium: 'w-1/2',
    large: 'w-full',
  };

  return (
    <div className="p-5" dir={`${isEnglish ? 'ltr' : 'rtl'}`}>
      <Card className={`flex flex-col md:flex-row p-5  rounded-lg shadow-md ${sizeClasses[size]}`}>
        {showText && (
          <div className="flex-1 pr-5 mb-4 md:mb-0">
            <Typography variant="h6" className="mb-2">
              {isEnglish ? 'Welcome to the Language Switcher' : 'مرحبًا بك في محوّل اللغة'}
            </Typography>
            <Typography variant="body2">
              {isEnglish
                ? 'Click the switch to toggle between English and Spanish.'
                : 'Haga clic en el interruptor para alternar entre inglés y español.'}
            </Typography>
          </div>
        )}

        {/* Right side (Language Switch with Label) */}
        <div className="flex flex-col items-center">
          {/* <Typography variant="body2" className="mb-2">
            {isEnglish ? 'Language' : 'Idioma'}
          </Typography> */}
          <div className="flex items-center">
            {/* Label and Switch */}
            <label className="mr-2">
              {isEnglish ? 'English' : 'Arabic'}
            </label>
            <Switch checked={isEnglish} onCheckedChange={handleLanguageChange} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Toggle;
