import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Checkout from './page';
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

// Mock Header and Footer components
jest.mock('@/components/layout/Header', () => ({
  Header: () => <div data-testid="mock-header">Header</div>
}));

jest.mock('@/components/layout/Footer', () => ({
  Footer: () => <div data-testid="mock-footer">Footer</div>
}));

describe('Checkout Page', () => {
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

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    
    // Mock localStorage
    const mockLocalStorage = {
      getItem: jest.fn().mockReturnValue(JSON.stringify(mockCartItems)),
      setItem: jest.fn(),
      removeItem: jest.fn(),
      clear: jest.fn(),
      length: 1,
      key: jest.fn()
    };
    
    Object.defineProperty(window, 'localStorage', {
      value: mockLocalStorage,
      writable: true
    });
    
    // Mock setTimeout
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('renders checkout form and order summary', () => {
    render(<Checkout />);
    
    // Check form sections
    expect(screen.getByText('Checkout')).toBeInTheDocument();
    expect(screen.getByText('Customer Information')).toBeInTheDocument();
    expect(screen.getByText('Shipping Information')).toBeInTheDocument();
    expect(screen.getByText('Payment Method')).toBeInTheDocument();
    
    // Check order summary
    expect(screen.getByText('Order Summary')).toBeInTheDocument();
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
    
    // Check form fields
    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
    expect(screen.getByLabelText('Street Address')).toBeInTheDocument();
    
    // Check payment options
    expect(screen.getByLabelText(/Credit Card/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/PayPal/i)).toBeInTheDocument();
    
    // Check complete order button
    expect(screen.getByText('Complete Order')).toBeInTheDocument();
  });

  test('handles form submission and redirects to success page', async () => {
    render(<Checkout />);
    
    // Fill out the form
    fireEvent.change(screen.getByLabelText('First Name'), {
      target: { value: 'John' }
    });
    
    fireEvent.change(screen.getByLabelText('Last Name'), {
      target: { value: 'Doe' }
    });
    
    fireEvent.change(screen.getByLabelText('Email Address'), {
      target: { value: 'john.doe@example.com' }
    });
    
    fireEvent.change(screen.getByLabelText('Street Address'), {
      target: { value: '123 Main St' }
    });
    
    fireEvent.change(screen.getByLabelText('City'), {
      target: { value: 'New York' }
    });
    
    fireEvent.change(screen.getByLabelText('Postal Code'), {
      target: { value: '10001' }
    });
    
    fireEvent.change(screen.getByLabelText('Country'), {
      target: { value: 'US' }
    });
    
    // Submit the form
    fireEvent.click(screen.getByText('Complete Order'));
    
    // Fast-forward past timeout
    jest.advanceTimersByTime(1500);
    
    // Check that localStorage was cleared
    await waitFor(() => {
      expect(window.localStorage.removeItem).toHaveBeenCalledWith('cartItems');
    });
    
    // Check for success message
    jest.advanceTimersByTime(2000);
    
    // Check for redirect
    expect(mockRouter.push).toHaveBeenCalledWith('/order-success');
  });

  test('displays correct order totals', () => {
    render(<Checkout />);
    
    // Subtotal: 2 * 99.99 = 199.98
    expect(screen.getByText('$199.98')).toBeInTheDocument();
    
    // Tax: 199.98 * 0.1 = 19.998 (rounded to $20.00)
    expect(screen.getByText('$20.00')).toBeInTheDocument();
    
    // Shipping: $10.00
    expect(screen.getByText('$10.00')).toBeInTheDocument();
    
    // Total: 199.98 + 19.998 + 10 = 229.978 (rounded to $229.98)
    expect(screen.getByText('$229.98')).toBeInTheDocument();
  });

  test('allows switching between payment methods', () => {
    render(<Checkout />);
    
    // Credit Card should be selected by default
    const creditCardRadio = screen.getByLabelText(/Credit Card/i) as HTMLInputElement;
    expect(creditCardRadio.checked).toBeTruthy();
    
    // Click PayPal option
    fireEvent.click(screen.getByLabelText(/PayPal/i));
    
    // PayPal should now be selected
    const paypalRadio = screen.getByLabelText(/PayPal/i) as HTMLInputElement;
    expect(paypalRadio.checked).toBeTruthy();
    expect(creditCardRadio.checked).toBeFalsy();
  });
}); 