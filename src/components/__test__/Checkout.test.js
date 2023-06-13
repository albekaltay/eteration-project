import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Checkout from '../Checkout';
import '@testing-library/jest-dom'


jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}));

test('Checkout component renders correctly', () => {
  const totalPrice = 100; 
  useSelector.mockReturnValueOnce(totalPrice);

  const { getByText } = render(<Checkout />);
  const totalPriceElement = getByText(`${totalPrice.toLocaleString()} ₺`);
  const checkoutButton = getByText('Checkout');

  expect(totalPriceElement).toBeInTheDocument();
  expect(checkoutButton).toBeInTheDocument();
});