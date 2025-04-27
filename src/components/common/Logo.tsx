import Link from 'next/link';
import { FaShoppingBag } from 'react-icons/fa';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  colorScheme?: 'primary' | 'light' | 'dark';
  withTagline?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md', 
  colorScheme = 'primary',
  withTagline = false
}) => {
  const sizeClasses = {
    sm: 'h-6 w-6 mr-1.5 text-xl',
    md: 'h-8 w-8 mr-2 text-2xl',
    lg: 'h-10 w-10 mr-3 text-3xl'
  };

  const colorClasses = {
    primary: 'text-primary',
    light: 'text-white',
    dark: 'text-gray-800'
  };

  const { h, w, mr, text } = {
    h: sizeClasses[size].split(' ')[0],
    w: sizeClasses[size].split(' ')[1],
    mr: sizeClasses[size].split(' ')[2],
    text: sizeClasses[size].split(' ')[3]
  };

  return (
    <Link href="/" className={`flex flex-col items-start ${className}`}>
      <div className="flex items-center">
        <FaShoppingBag className={`${colorClasses[colorScheme]} ${h} ${w} ${mr}`} />
        <span className={`${text} font-bold`}>
          <span className={colorClasses[colorScheme]}>e</span>
          <span className={colorScheme === 'light' ? 'text-white' : 'text-gray-800'}>-Mart</span>
        </span>
      </div>
      {withTagline && (
        <span className={`text-xs ml-${size === 'lg' ? '3' : size === 'md' ? '2' : '1.5'} ${colorScheme === 'light' ? 'text-gray-200' : 'text-gray-500'}`}>
          Your one-stop shop
        </span>
      )}
    </Link>
  );
};

export default Logo; 