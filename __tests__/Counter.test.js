import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from '../src/components/Counter.jsx';

describe('Counter Component', () => {
  test('renders with default props', () => {
    render(<Counter />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  test('renders with custom initial value and label', () => {
    render(<Counter initial={5} label="Clicks" />);
    expect(screen.getByText('Clicks: 5')).toBeInTheDocument();
  });

  test('increments the count when button is clicked', () => {
    render(<Counter initial={1} />);
    const button = screen.getByText('Increment');

    fireEvent.click(button);
    expect(screen.getByText('Count: 2')).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByText('Count: 3')).toBeInTheDocument();
  });
});
