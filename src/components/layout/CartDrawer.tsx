import { FaTimes, FaTrash } from 'react-icons/fa';
import { CartItem } from '@/types/product';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface CartDrawerProps {
  isOpen: boolean;
  cartItems: CartItem[];
  onClose: () => void;
  onRemoveItem: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  cartItems,
  onClose,
  onRemoveItem,
  onUpdateQuantity,
}) => {
  const router = useRouter();
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const handleCheckout = () => {
    // Save current cart to localStorage before navigating
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    // Close the cart drawer
    onClose();
    // Navigate to checkout page
    router.push('/checkout');
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Cart drawer */}
      <div
        className={`fixed top-0 right-0 w-full md:w-96 h-full bg-white dark:bg-gray-900 z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold">Your Cart</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <FaTimes />
            </button>
          </div>

          {/* Cart items */}
          <div className="flex-grow overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
                <p className="mb-4">Your cart is empty</p>
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="space-y-4">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center space-x-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg animate-fadeIn"
                  >
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-l"
                      >
                        -
                      </button>
                      <span className="w-8 h-8 flex items-center justify-center bg-gray-100 dark:bg-gray-600">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-r"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="p-2 text-red-500 hover:bg-red-100 dark:hover:bg-red-900 rounded-full transition-colors"
                    >
                      <FaTrash size={14} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between mb-4">
                <span className="font-bold">Total:</span>
                <span className="font-bold">${totalPrice.toFixed(2)}</span>
              </div>
              <button 
                onClick={handleCheckout}
                className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}; 