// Label.tsx
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface LabelProps {
  text: string;
  state: 'active' | 'default' | 'disabled';
  className?: string;
}

const ToggleGroup = ({ text, state = 'default', className }: LabelProps) => {
  return (
    <button
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-md text-sm font-medium transition-colors',
        state === 'active' && 'bg-blue-100 text-blue-700',
        state === 'default' && 'bg-gray-100 text-gray-700 hover:bg-gray-200',
        state === 'disabled' && 'bg-gray-100 text-gray-400 cursor-not-allowed',
        className
      )}
      disabled={state === 'disabled'}
    >
      <Star
        size={16}
        className={cn(
          'fill-current',
          state === 'active' && 'text-blue-700',
          state === 'default' && 'text-gray-700',
          state === 'disabled' && 'text-gray-400'
        )}
      />
      {text}
    </button>
  );
};

export default ToggleGroup;