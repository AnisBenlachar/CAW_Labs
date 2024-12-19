import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MenuItem from '../MenuItem';

describe('MenuItem', () => {
  const mockItem = {
    id: 1,
    name: 'Test Item',
    description: 'Test Description',
    price: 9.99
  };

  it('renders item details correctly', () => {
    const { getByText } = render(<MenuItem item={mockItem} onAddToCart={() => {}} />);
    
    expect(getByText('Test Item')).toBeInTheDocument();
    expect(getByText('Test Description')).toBeInTheDocument();
    expect(getByText('$9.99')).toBeInTheDocument();
  });

  it('calls onAddToCart when Add to Cart button is clicked', () => {
    const mockOnAddToCart = jest.fn();
    const { getByText } = render(<MenuItem item={mockItem} onAddToCart={mockOnAddToCart} />);
    
    fireEvent.click(getByText('Add to Cart'));
    expect(mockOnAddToCart).toHaveBeenCalled();
  });
}); 