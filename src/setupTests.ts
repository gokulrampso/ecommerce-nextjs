// This file configures the test environment for Jest
import '@testing-library/jest-dom';
import React from 'react';

// Set up global Jest types
declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveClass(className: string): R;
      toHaveTextContent(text: string): R;
    }
  }
}

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    prefetch: jest.fn(),
    pathname: '/',
    query: {}
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams()
}));

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return React.createElement('img', props);
  }
}));

// Mock localStorage
const mockLocalStorage = () => {
  const store: Record<string, string> = {};
  
  return {
    getItem: jest.fn((key: string) => store[key] || null),
    setItem: jest.fn((key: string, value: string) => {
      store[key] = value;
    }),
    removeItem: jest.fn((key: string) => {
      delete store[key];
    }),
    clear: jest.fn(() => {
      Object.keys(store).forEach(key => delete store[key]);
    }),
    length: 0,
    key: jest.fn((index: number) => '')
  };
};

// Apply mocks before each test
beforeEach(() => {
  Object.defineProperty(window, 'localStorage', {
    value: mockLocalStorage(),
    writable: true
  });
}); 