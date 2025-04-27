import Image from 'next/image';
import { useState } from 'react';
import { FaShoppingCart, FaHeart, FaEye, FaStar } from 'react-icons/fa';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-72">
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ 
            objectFit: 'cover',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.5s ease'
          }}
        />
        
        {/* Quick action buttons */}
        <div className={`absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center gap-2 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <button className="p-3 bg-white dark:bg-gray-800 rounded-full text-gray-800 dark:text-white hover:bg-blue-500 hover:text-white transition-colors" suppressHydrationWarning>
            <FaEye />
          </button>
          <button className="p-3 bg-white dark:bg-gray-800 rounded-full text-gray-800 dark:text-white hover:bg-blue-500 hover:text-white transition-colors" suppressHydrationWarning>
            <FaHeart />
          </button>
        </div>
        
        {/* Category badge */}
        <div className="absolute top-2 left-2">
          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar className="text-gray-300 dark:text-gray-600" />
          </div>
          <span className="text-xs text-gray-600 dark:text-gray-400 ml-2">(4.0)</span>
        </div>
        
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1 truncate">
          {product.name}
        </h3>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2 h-10">
          {product.description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
            ${product.price.toFixed(2)}
          </span>
          
          <button
            onClick={() => onAddToCart(product)}
            className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-full transition-colors"
            suppressHydrationWarning
          >
            <FaShoppingCart className="mr-1" />
            <span className="text-sm">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}; 