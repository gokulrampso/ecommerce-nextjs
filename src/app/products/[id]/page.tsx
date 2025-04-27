'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/layout/CartDrawer';
import { products } from '@/data/products';
import { Product, CartItem } from '@/types/product';
import { FaStar, FaHeart, FaShareAlt, FaArrowLeft, FaTruck, FaUndo, FaShieldAlt } from 'react-icons/fa';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.id as string;
  
  const [product, setProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Find the product by ID
  useEffect(() => {
    const foundProduct = products.find(p => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      // Handle non-existent product
      router.push('/products');
    }
  }, [productId, router]);

  // Load cart from localStorage
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

  // Find related products (same category)
  const relatedProducts = product 
    ? products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)
    : [];

  const handleAddToCart = () => {
    if (!product) return;
    
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });

    // Show cart after adding
    setIsCartOpen(true);
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

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(Math.max(1, newQuantity));
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
        <Header cartItems={cartItems} onCartClick={() => setIsCartOpen(true)} />
        <main className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-xl">Loading product...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header cartItems={cartItems} onCartClick={() => setIsCartOpen(true)} />

      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="flex text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-500">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/products" className="text-gray-500 hover:text-blue-500">Products</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link 
              href={`/products?category=${encodeURIComponent(product.category)}`}
              className="text-gray-500 hover:text-blue-500"
            >
              {product.category}
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-800 dark:text-gray-300">{product.name}</span>
          </nav>
        </div>

        {/* Back button (mobile only) */}
        <button 
          onClick={() => router.back()}
          className="mb-4 md:hidden flex items-center text-blue-600 dark:text-blue-400"
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>

        {/* Product details */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product image */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-lg"
              />
            </div>

            {/* Product info */}
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar className="text-gray-300 dark:text-gray-600" />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">4.0 (24 reviews)</span>
              </div>
              
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                ${product.price.toFixed(2)}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {product.description}
              </p>
              
              <div className="mb-6">
                <div className="font-medium mb-2">Quantity</div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="w-10 h-10 flex items-center justify-center border rounded-l"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                    className="w-16 h-10 border-t border-b text-center"
                    min="1"
                  />
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center border rounded-r"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`flex items-center justify-center py-3 px-6 rounded-lg border transition-colors ${
                    isWishlisted
                      ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-500'
                      : 'border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <FaHeart className={isWishlisted ? 'text-red-500' : ''} />
                  <span className="ml-2">{isWishlisted ? 'Wishlisted' : 'Wishlist'}</span>
                </button>
              </div>
              
              {/* Shipping info */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <FaTruck className="text-blue-500 mr-3" />
                    <span>Free shipping on orders over $50</span>
                  </div>
                  <div className="flex items-center">
                    <FaUndo className="text-blue-500 mr-3" />
                    <span>30-day easy returns</span>
                  </div>
                  <div className="flex items-center">
                    <FaShieldAlt className="text-blue-500 mr-3" />
                    <span>2-year warranty</span>
                  </div>
                </div>
              </div>
              
              {/* Share */}
              <div className="mt-6 flex items-center">
                <span className="mr-3">Share:</span>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <FaShareAlt />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <Link 
                  href={`/products/${relatedProduct.id}`} 
                  key={relatedProduct.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium truncate">{relatedProduct.name}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-bold mt-1">
                      ${relatedProduct.price.toFixed(2)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
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