import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaShoppingCart, FaSearch, FaUser, FaHeart } from 'react-icons/fa';
import { CartItem } from '@/types/product';
import { products } from '@/data/products';

interface HeaderProps {
  cartItems: CartItem[];
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartItems, onCartClick }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  // Suppress hydration warnings for form elements
  const suppressHydration = { suppressHydrationWarning: true };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setShowSuggestions(false);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.length > 1) {
      // Filter products based on the search query
      const filteredSuggestions = Array.from(
        new Set(
          products
            .filter(product => 
              product.name.toLowerCase().includes(query.toLowerCase()) ||
              product.category.toLowerCase().includes(query.toLowerCase())
            )
            .map(product => product.name)
            .slice(0, 5) // Limit to 5 suggestions
        )
      );
      setSearchSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setSearchSuggestions([]);
      setShowSuggestions(false);
    }
  };

  // Handle clicks outside search to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const selectSuggestion = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    router.push(`/products?search=${encodeURIComponent(suggestion)}`);
  };

  return (
    <header className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-md sticky top-0 z-40">
      {/* Top bar */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            e-MART
          </Link>
        </div>

        {/* Search */}
        <div ref={searchRef} className={`flex-grow max-w-xl mx-4 transition-all duration-300 relative ${isSearchOpen ? 'opacity-100' : 'hidden md:block'}`}>
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => setShowSuggestions(true)}
              className="w-full py-2 pl-4 pr-10 rounded-full bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoComplete="off"
              {...suppressHydration}
            />
            <button 
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400"
              {...suppressHydration}
            >
              <FaSearch />
            </button>
          </form>
          
          {/* Autocomplete suggestions */}
          {showSuggestions && searchSuggestions.length > 0 && (
            <div className="absolute z-50 w-full mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              <ul className="py-1">
                {searchSuggestions.map((suggestion, index) => (
                  <li key={index}>
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center"
                      onClick={() => selectSuggestion(suggestion)}
                      {...suppressHydration}
                    >
                      <FaSearch className="text-gray-400 mr-2 text-sm" />
                      <span>{suggestion}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors md:hidden"
            {...suppressHydration}
          >
            <FaSearch />
          </button>
          <Link 
            href="/wishlist" 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <FaHeart />
          </Link>
          <Link 
            href="/account" 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <FaUser />
          </Link>
          <button
            onClick={onCartClick}
            className="flex items-center gap-1 p-2 rounded-full relative hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            {...suppressHydration}
          >
            <FaShoppingCart className="text-xl" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <ul className="flex gap-8 overflow-x-auto py-3 text-sm font-medium scrollbar-hide">
            <li>
              <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products?category=Electronics" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Electronics
              </Link>
            </li>
            <li>
              <Link href="/products?category=Clothing" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Clothing
              </Link>
            </li>
            <li>
              <Link href="/products?category=Home+%26+Kitchen" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Home & Kitchen
              </Link>
            </li>
            <li>
              <Link href="/products?category=Beauty" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Beauty
              </Link>
            </li>
            <li>
              <Link href="/products?category=Sports" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Sports
              </Link>
            </li>
            <li>
              <Link href="/products?category=Books" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Books
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}; 