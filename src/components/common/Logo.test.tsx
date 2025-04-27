import { render, screen } from '@testing-library/react';
import Logo from './Logo';

describe('Logo Component', () => {
  test('renders with default props', () => {
    render(<Logo />);
    
    const logoLink = screen.getByRole('link');
    expect(logoLink).toHaveAttribute('href', '/');
    expect(screen.getByText('e')).toBeInTheDocument();
    expect(screen.getByText('-Mart')).toBeInTheDocument();
  });

  test('renders with different sizes', () => {
    const { rerender } = render(<Logo size="sm" />);
    
    // Small size
    expect(screen.getByText('e').parentElement).toHaveClass('text-xl');
    
    // Medium size
    rerender(<Logo size="md" />);
    expect(screen.getByText('e').parentElement).toHaveClass('text-2xl');
    
    // Large size
    rerender(<Logo size="lg" />);
    expect(screen.getByText('e').parentElement).toHaveClass('text-3xl');
  });

  test('renders with different color schemes', () => {
    const { rerender } = render(<Logo colorScheme="primary" />);
    
    // Primary color
    expect(screen.getByText('e')).toHaveClass('text-primary');
    
    // Light color
    rerender(<Logo colorScheme="light" />);
    expect(screen.getByText('e')).toHaveClass('text-white');
    
    // Dark color
    rerender(<Logo colorScheme="dark" />);
    expect(screen.getByText('e')).toHaveClass('text-gray-800');
  });

  test('renders with tagline when specified', () => {
    const { rerender } = render(<Logo />);
    
    // Without tagline (default)
    expect(screen.queryByText('Your one-stop shop')).not.toBeInTheDocument();
    
    // With tagline
    rerender(<Logo withTagline />);
    expect(screen.getByText('Your one-stop shop')).toBeInTheDocument();
  });

  test('applies custom className when provided', () => {
    render(<Logo className="custom-class" />);
    const logoLink = screen.getByRole('link');
    expect(logoLink).toHaveClass('custom-class');
  });
}); 