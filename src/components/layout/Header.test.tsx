import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from './Header';
import { useRouter } from 'next/navigation';

// Mock the useRouter hook
jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}));

// Mock the products data
jest.mock('@/data/products', () => ({
  products: [
    { id: '1', name: 'Product 1', category: 'Electronics', price: 100, image: '/product1.jpg' },
    { id: '2', name: 'Product 2', category: 'Clothing', price: 50, image: '/product2.jpg' }
  ]
}));

describe('Header Component', () => {
  const mockRouter = { push: jest.fn() };
  const mockCartItems = [
    { 
      id: '1', 
      name: 'Product 1', 
      category: 'Electronics', 
      price: 100, 
      image: '/product1.jpg', 
      quantity: 2,
      description: 'A test product description'
    }
  ];
  const mockOnCartClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
  });

  test('renders correctly with cart items', () => {
    render(
      <Header cartItems={mockCartItems} onCartClick={mockOnCartClick} />
    );
    
    // Logo
    expect(screen.getByText('e-Mart')).toBeInTheDocument();
    
    // Navigation links
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Electronics')).toBeInTheDocument();
    expect(screen.getByText('Clothing')).toBeInTheDocument();
    
    // Cart badge should show the correct quantity
    const cartBadge = screen.getByText('2');
    expect(cartBadge).toBeInTheDocument();
  });

  test('handles search functionality', () => {
    render(
      <Header cartItems={mockCartItems} onCartClick={mockOnCartClick} />
    );
    
    // Type in search box
    const searchInput = screen.getByPlaceholderText('Search for products...');
    fireEvent.change(searchInput, { target: { value: 'Product 1' } });
    
    // Submit search form
    const searchForm = searchInput.closest('form');
    fireEvent.submit(searchForm!);
    
    // Should navigate to search results
    expect(mockRouter.push).toHaveBeenCalledWith('/products?search=Product%201');
  });

  test('shows search suggestions when typing', () => {
    render(
      <Header cartItems={mockCartItems} onCartClick={mockOnCartClick} />
    );
    
    // Type in search box
    const searchInput = screen.getByPlaceholderText('Search for products...');
    fireEvent.change(searchInput, { target: { value: 'Product' } });
    fireEvent.focus(searchInput);
    
    // Should show suggestions
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
    
    // Click on a suggestion
    fireEvent.click(screen.getByText('Product 1'));
    
    // Should navigate to product search
    expect(mockRouter.push).toHaveBeenCalledWith('/products?search=Product%201');
  });

  test('handles cart icon click', () => {
    render(
      <Header cartItems={mockCartItems} onCartClick={mockOnCartClick} />
    );
    
    // Find the cart icon button
    const cartButton = screen.getByRole('button', { name: '' });
    fireEvent.click(cartButton);
    
    // Should call the onCartClick handler
    expect(mockOnCartClick).toHaveBeenCalledTimes(1);
  });

  test('toggles search on mobile', () => {
    render(
      <Header cartItems={[]} onCartClick={mockOnCartClick} />
    );
    
    // Find the search toggle button (visible on mobile)
    const searchToggle = screen.getAllByRole('button')[0];
    
    // Initially search is hidden on mobile
    const searchContainer = screen.getByPlaceholderText('Search for products...').closest('div');
    expect(searchContainer).toHaveClass('hidden');
    
    // Click to show search
    fireEvent.click(searchToggle);
    
    // Search should now be visible
    expect(searchContainer).toHaveClass('opacity-100');
    
    // Click again to hide
    fireEvent.click(searchToggle);
    
    // Search should be hidden again
    expect(searchContainer).toHaveClass('hidden');
  });
}); 