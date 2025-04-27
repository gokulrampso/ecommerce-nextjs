import { render, screen } from '@testing-library/react';
import PrivacyPolicyPage from './page';

// Mock the PageTemplate component
jest.mock('@/components/PageTemplate', () => ({
  PageTemplate: ({ title, content }: { title: string; content: React.ReactNode }) => (
    <div data-testid="page-template">
      <h1>{title}</h1>
      <div data-testid="content">{content}</div>
    </div>
  )
}));

describe('Privacy Policy Page', () => {
  test('renders with correct title', () => {
    render(<PrivacyPolicyPage />);
    
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
  });

  test('contains all required privacy policy sections', () => {
    render(<PrivacyPolicyPage />);
    
    const contentContainer = screen.getByTestId('content');
    
    // Check for main sections
    expect(contentContainer).toHaveTextContent('Information We Collect');
    expect(contentContainer).toHaveTextContent('How We Use Your Information');
    expect(contentContainer).toHaveTextContent('How We Share Your Information');
    expect(contentContainer).toHaveTextContent('Your Rights and Choices');
    expect(contentContainer).toHaveTextContent('Data Security');
    expect(contentContainer).toHaveTextContent('International Transfers');
    expect(contentContainer).toHaveTextContent('Children\'s Privacy');
    expect(contentContainer).toHaveTextContent('Changes to This Privacy Policy');
    expect(contentContainer).toHaveTextContent('Contact Us');
  });

  test('includes contact information', () => {
    render(<PrivacyPolicyPage />);
    
    expect(screen.getByText(/privacy@e-mart\.com/)).toBeInTheDocument();
  });

  test('includes last updated date', () => {
    render(<PrivacyPolicyPage />);
    
    expect(screen.getByText(/Last Updated: June 1, 2023/)).toBeInTheDocument();
  });
}); 