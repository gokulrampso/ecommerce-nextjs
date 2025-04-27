import { render, screen, fireEvent } from '@testing-library/react';
import { CartDrawer } from './CartDrawer';
import { useRouter } from 'next/navigation';

// Mock the useRouter hook
jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}));

// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  }
}));

describe('CartDrawer Component', () => {
  const mockRouter = { push: jest.fn() };
  const mockCartItems = [
    { 
      id: '1', 
      name: 'Test Product', 
      price: 99.99, 
      image: '/test-image.jpg', 
      quantity: 2,
      category: 'Electronics',
      description: 'A test product',
      rating: 4.5,
      reviews: 10,
      inStock: true,
      onSale: false
    }
  ];
  const mockOnClose = jest.fn();
  const mockOnRemoveItem = jest.fn();
  const mockOnUpdateQuantity = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    // Mock localStorage
    Object.defineProperty(window, 'localStorage', {
      value: {
        setItem: jest.fn(),
        getItem: jest.fn(),
      },
      writable: true
    });
  });

  test('renders correctly when open with items', () => {
    render(
      <CartDrawer
        isOpen={true}
        cartItems={mockCartItems}
        onClose={mockOnClose}
        onRemoveItem={mockOnRemoveItem}
        onUpdateQuantity={mockOnUpdateQuantity}
      />
    );
    
    // Title
    expect(screen.getByText('Your Cart')).toBeInTheDocument();
    
    // Product details
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
    
    // Quantity
    expect(screen.getByText('2')).toBeInTheDocument();
    
    // Total price
    expect(screen.getByText('$199.98')).toBeInTheDocument();
    
    // Checkout button
    expect(screen.getByText('Checkout')).toBeInTheDocument();
  });

  test('renders empty cart message when no items', () => {
    render(
      <CartDrawer
        isOpen={true}
        cartItems={[]}
        onClose={mockOnClose}
        onRemoveItem={mockOnRemoveItem}
        onUpdateQuantity={mockOnUpdateQuantity}
      />
    );
    
    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
    expect(screen.getByText('Continue Shopping')).toBeInTheDocument();
  });

  test('is not visible when closed', () => {
    render(
      <CartDrawer
        isOpen={false}
        cartItems={mockCartItems}
        onClose={mockOnClose}
        onRemoveItem={mockOnRemoveItem}
        onUpdateQuantity={mockOnUpdateQuantity}
      />
    );
    
    const drawer = screen.getByRole('div');
    expect(drawer).toHaveClass('translate-x-full');
  });

  test('calls onClose when close button is clicked', () => {
    render(
      <CartDrawer
        isOpen={true}
        cartItems={mockCartItems}
        onClose={mockOnClose}
        onRemoveItem={mockOnRemoveItem}
        onUpdateQuantity={mockOnUpdateQuantity}
      />
    );
    
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test('calls onRemoveItem when remove button is clicked', () => {
    render(
      <CartDrawer
        isOpen={true}
        cartItems={mockCartItems}
        onClose={mockOnClose}
        onRemoveItem={mockOnRemoveItem}
        onUpdateQuantity={mockOnUpdateQuantity}
      />
    );
    
    const removeButton = screen.getByRole('button', { name: /remove/i });
    fireEvent.click(removeButton);
    
    expect(mockOnRemoveItem).toHaveBeenCalledWith('1');
  });

  test('calls onUpdateQuantity when quantity buttons are clicked', () => {
    render(
      <CartDrawer
        isOpen={true}
        cartItems={mockCartItems}
        onClose={mockOnClose}
        onRemoveItem={mockOnRemoveItem}
        onUpdateQuantity={mockOnUpdateQuantity}
      />
    );
    
    // Decrease quantity
    const decreaseButton = screen.getByText('-');
    fireEvent.click(decreaseButton);
    expect(mockOnUpdateQuantity).toHaveBeenCalledWith('1', 1);
    
    // Increase quantity
    const increaseButton = screen.getByText('+');
    fireEvent.click(increaseButton);
    expect(mockOnUpdateQuantity).toHaveBeenCalledWith('1', 3);
  });

  test('stores cart items in localStorage and navigates to checkout', () => {
    render(
      <CartDrawer
        isOpen={true}
        cartItems={mockCartItems}
        onClose={mockOnClose}
        onRemoveItem={mockOnRemoveItem}
        onUpdateQuantity={mockOnUpdateQuantity}
      />
    );
    
    const checkoutButton = screen.getByText('Checkout');
    fireEvent.click(checkoutButton);
    
    // Should save to localStorage
    expect(window.localStorage.setItem).toHaveBeenCalledWith('cartItems', JSON.stringify(mockCartItems));
    
    // Should close drawer
    expect(mockOnClose).toHaveBeenCalledTimes(1);
    
    // Should navigate to checkout
    expect(mockRouter.push).toHaveBeenCalledWith('/checkout');
  });
}); 