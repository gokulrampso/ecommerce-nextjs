'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductCard } from '@/components/products/ProductCard';
import { CartDrawer } from '@/components/layout/CartDrawer';
import { products } from '@/data/products';
import { Product, CartItem } from '@/types/product';
import { FaFilter, FaTimes, FaSortAmountDown, FaChevronDown } from 'react-icons/fa';

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get('category');
  const searchQuery = searchParams.get('search');
  const saleParam = searchParams.get('sale');
  const sortParam = searchParams.get('sort') || 'featured';

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'All');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);

  // Available categories (derived from all products)
  const categories = ['All', ...Array.from(new Set(products.map(product => product.category)))];

  // Load cart from localStorage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart));
      } catch (e) {
        console.error('Error parsing cart items from localStorage:', e);
      }
    }
  }, []);

  // Filter products when category, search, or sale parameters change
  useEffect(() => {
    let result = [...products];

    // Filter by category
    if (categoryParam && categoryParam !== 'All') {
      result = result.filter(product => 
        product.category.toLowerCase() === categoryParam.toLowerCase()
      );
      setSelectedCategory(categoryParam);
    } else if (!categoryParam && selectedCategory !== 'All') {
      result = result.filter(product => 
        product.category === selectedCategory
      );
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }

    // Filter by sale
    if (saleParam === 'true') {
      // For demo, we'll just consider products with price ending in .99 as "on sale"
      result = result.filter(product => 
        product.price.toString().endsWith('.99')
      );
    }

    // Filter by price range
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort products
    if (sortParam === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortParam === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortParam === 'newest') {
      // In a real app, would sort by date
      // Here we'll sort by ID as a proxy
      result.sort((a, b) => parseInt(b.id) - parseInt(a.id));
    } else if (sortParam === 'bestselling') {
      // In a real app, would sort by sales data
      // Here we'll sort by ID as a proxy (backwards)
      result.sort((a, b) => parseInt(a.id) - parseInt(b.id));
    }
    
    setFilteredProducts(result);
  }, [categoryParam, searchQuery, saleParam, sortParam, selectedCategory, priceRange]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    
    // Create new URLSearchParams using current parameters
    const params = new URLSearchParams(searchParams.toString());
    
    // Update or remove category parameter
    if (category === 'All') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    
    // Maintain other existing parameters
    const queryString = params.toString();
    const url = queryString ? `/products?${queryString}` : '/products';
    
    // Navigate to the new URL
    router.push(url);
    
    setIsFiltersOpen(false);
  };

  const handlePriceRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const maxPrice = parseInt(event.target.value);
    setPriceRange([0, maxPrice]);
  };

  const handleAddToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    if (cartItems.length === 1) {
      localStorage.removeItem('cartItems');
    }
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity }
          : item
      )
    );
  };

  // Close sort dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sortButtonEl = document.getElementById('sort-dropdown-button');
      const sortDropdownEl = document.getElementById('sort-dropdown-content');
      
      if (
        sortButtonEl && 
        sortDropdownEl && 
        !sortButtonEl.contains(event.target as Node) && 
        !sortDropdownEl.contains(event.target as Node)
      ) {
        setIsSortOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Suppress hydration warnings for inputs and buttons
  const suppressHydration = { suppressHydrationWarning: true };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header cartItems={cartItems} onCartClick={() => setIsCartOpen(true)} />

      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {searchQuery 
              ? `Search results for "${searchQuery}"` 
              : categoryParam 
                ? `${categoryParam}` 
                : 'All Products'}
          </h1>
          <div className="flex items-center justify-between">
            <p className="text-gray-600 dark:text-gray-400">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
            </p>
            <button 
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              className="lg:hidden flex items-center gap-2 text-sm bg-white dark:bg-gray-800 px-3 py-2 rounded border"
            >
              <FaFilter size={14} />
              Filters
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile filters (shown as drawer) */}
          <div 
            className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
              isFiltersOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setIsFiltersOpen(false)}
          />
          
          <div 
            className={`lg:hidden fixed left-0 bottom-0 top-0 w-4/5 max-w-xs bg-white dark:bg-gray-900 z-50 shadow-xl transform transition-transform ${
              isFiltersOpen ? 'translate-x-0' : '-translate-x-full'
            } overflow-y-auto p-4`}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Filters</h2>
              <button 
                onClick={() => setIsFiltersOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <FaTimes size={18} />
              </button>
            </div>
            {/* Filter content - same as desktop version */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Categories</h3>
              <ul className="space-y-2">
                {categories.map(category => (
                  <li key={category}>
                    <button 
                      onClick={() => handleCategoryChange(category)}
                      className={`w-full text-left px-2 py-1 rounded ${
                        category === selectedCategory 
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-medium' 
                          : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                      {...suppressHydration}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="font-medium mb-3">Price Range</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>$0</span>
                  <span>${priceRange[1]}</span>
                </div>
                <div className="px-2">
                  <input 
                    type="range" 
                    min="0" 
                    max="500" 
                    value={priceRange[1]} 
                    onChange={handlePriceRangeChange}
                    className="w-full"
                    {...suppressHydration}
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-3">On Sale</h3>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="sale-filter-mobile" 
                  checked={saleParam === 'true'}
                  className="h-4 w-4 text-blue-600 rounded"
                  readOnly
                />
                <label htmlFor="sale-filter-mobile" className="ml-2">
                  <Link 
                    href={saleParam === 'true' 
                      ? '/products' 
                      : '/products?sale=true'
                    }
                    className="hover:text-blue-500"
                  >
                    Show only sale items
                  </Link>
                </label>
              </div>
            </div>
          </div>

          {/* Desktop filters (left sidebar) */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              <div className="mb-6">
                <h3 className="font-medium mb-3">Categories</h3>
                <ul className="space-y-2">
                  {categories.map(category => (
                    <li key={category}>
                      <button 
                        onClick={() => handleCategoryChange(category)}
                        className={`w-full text-left px-2 py-1 rounded ${
                          category === selectedCategory 
                            ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-medium' 
                            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                        {...suppressHydration}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>$0</span>
                    <span>${priceRange[1]}</span>
                  </div>
                  <div className="px-2">
                    <input 
                      type="range" 
                      min="0" 
                      max="500" 
                      value={priceRange[1]} 
                      onChange={handlePriceRangeChange}
                      className="w-full"
                      {...suppressHydration}
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-3">On Sale</h3>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="sale-filter" 
                    checked={saleParam === 'true'}
                    className="h-4 w-4 text-blue-600 rounded"
                    readOnly
                  />
                  <label htmlFor="sale-filter" className="ml-2">
                    <Link 
                      href={saleParam === 'true' 
                        ? '/products' 
                        : '/products?sale=true'
                      }
                      className="hover:text-blue-500"
                    >
                      Show only sale items
                    </Link>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Products section */}
          <div className="flex-grow">
            {/* Sort options */}
            <div className="mb-6 flex justify-end">
              <div className="relative inline-block">
                <div 
                  id="sort-dropdown-button"
                  className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-lg shadow p-2 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsSortOpen(!isSortOpen);
                  }}
                  {...suppressHydration}
                >
                  <FaSortAmountDown size={16} />
                  <span className="text-sm">
                    Sort by: {sortParam === 'featured' && 'Featured'}
                    {sortParam === 'price-low' && 'Price: Low to High'}
                    {sortParam === 'price-high' && 'Price: High to Low'}
                    {sortParam === 'newest' && 'Newest'}
                    {sortParam === 'bestselling' && 'Best Selling'}
                  </span>
                  <FaChevronDown size={12} />
                </div>
                {isSortOpen && (
                  <div 
                    id="sort-dropdown-content"
                    className="absolute top-full right-0 mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 w-48 z-10"
                  >
                    <ul className="space-y-1">
                      <li>
                        <Link 
                          href={`/products?${
                            new URLSearchParams({
                              ...(categoryParam && {category: categoryParam}),
                              ...(searchQuery && {search: searchQuery}),
                              ...(saleParam && {sale: saleParam}),
                              sort: 'featured'
                            }).toString()
                          }`}
                          className={`block px-3 py-2 text-sm rounded ${
                            sortParam === 'featured' 
                              ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' 
                              : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                          onClick={() => setIsSortOpen(false)}
                        >
                          Featured
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href={`/products?${
                            new URLSearchParams({
                              ...(categoryParam && {category: categoryParam}),
                              ...(searchQuery && {search: searchQuery}),
                              ...(saleParam && {sale: saleParam}),
                              sort: 'price-low'
                            }).toString()
                          }`}
                          className={`block px-3 py-2 text-sm rounded ${
                            sortParam === 'price-low' 
                              ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' 
                              : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                          onClick={() => setIsSortOpen(false)}
                        >
                          Price: Low to High
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href={`/products?${
                            new URLSearchParams({
                              ...(categoryParam && {category: categoryParam}),
                              ...(searchQuery && {search: searchQuery}),
                              ...(saleParam && {sale: saleParam}),
                              sort: 'price-high'
                            }).toString()
                          }`}
                          className={`block px-3 py-2 text-sm rounded ${
                            sortParam === 'price-high' 
                              ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' 
                              : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                          onClick={() => setIsSortOpen(false)}
                        >
                          Price: High to Low
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href={`/products?${
                            new URLSearchParams({
                              ...(categoryParam && {category: categoryParam}),
                              ...(searchQuery && {search: searchQuery}),
                              ...(saleParam && {sale: saleParam}),
                              sort: 'newest'
                            }).toString()
                          }`}
                          className={`block px-3 py-2 text-sm rounded ${
                            sortParam === 'newest' 
                              ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' 
                              : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                          onClick={() => setIsSortOpen(false)}
                        >
                          Newest
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href={`/products?${
                            new URLSearchParams({
                              ...(categoryParam && {category: categoryParam}),
                              ...(searchQuery && {search: searchQuery}),
                              ...(saleParam && {sale: saleParam}),
                              sort: 'bestselling'
                            }).toString()
                          }`}
                          className={`block px-3 py-2 text-sm rounded ${
                            sortParam === 'bestselling' 
                              ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' 
                              : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                          onClick={() => setIsSortOpen(false)}
                        >
                          Best Selling
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="mb-4 text-gray-400">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <Link 
                  href="/products"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  View all products
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        cartItems={cartItems}
        onClose={() => setIsCartOpen(false)}
        onRemoveItem={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </div>
  );
} 