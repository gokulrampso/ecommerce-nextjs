'use client';

import React from 'react';
import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  colorClass?: string;
  withTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  colorClass = 'text-primary-600 dark:text-primary-400',
  withTagline = false
}) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  return (
    <Link href="/" className="flex flex-col items-center">
      <span className={`font-bold ${sizeClasses[size]} ${colorClass} leading-tight`}>
        <span className="text-accent-500 dark:text-accent-400">e</span>
        <span>-</span>
        <span>Mart</span>
      </span>
      {withTagline && (
        <span className="text-xs text-gray-600 dark:text-gray-400 mt-1">
          Shop smarter, not harder
        </span>
      )}
    </Link>
  );
}; 