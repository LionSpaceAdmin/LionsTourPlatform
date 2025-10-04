import { cn } from '@/lib/utils';
import React from 'react';

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 text-primary"
      >
        <path d="M12 2a10 10 0 0 0-7.53 16.59" />
        <path d="M13.61 3.4A1.5 1.5 0 0 1 15 4.5v5.5a1.5 1.5 0 0 1-3 0V5.5" />
        <path d="M12 12a10 10 0 0 0 9.53 7.41" />
        <path d="M12 12a10 10 0 0 1-7.53 6.59" />
        <path d="M10.39 3.4A1.5 1.5 0 0 0 9 4.5v5.5a1.5 1.5 0 0 0 3 0V5.5" />
        <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </svg>
      <span className="font-bold text-xl text-primary font-headline">
        LionsTour
      </span>
    </div>
  );
};

export default Logo;
