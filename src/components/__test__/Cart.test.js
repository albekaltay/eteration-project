import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Cart from '../Cart';
import '@testing-library/jest-dom'


test('Cart component renders correctly when cart is empty', () => {
  const cartItems = [];
  const handleAddToCart = jest.fn();
  const handleDecrementQuantity = jest.fn();

  const { getByText, queryByText } = render(
    <Cart cartItems={cartItems} handleAddToCart={handleAddToCart} handleDecrementQuantity={handleDecrementQuantity} />
  );

  const emptyCartText = getByText('Your cart is empty.');
  const addButton = queryByText('+');
  const decrementButton = queryByText('-');

  expect(emptyCartText).toBeInTheDocument();
  expect(addButton).not.toBeInTheDocument();
  expect(decrementButton).not.toBeInTheDocument();
});

test('Cart component renders correctly with cart items', () => {
  const cartItems = [
    { id: 1, name: 'Polo', price: 10, quantity: 2 },
    { id: 2, name: 'Tesla', price: 15, quantity: 1 }
  ];
  const handleAddToCart = jest.fn();
  const handleDecrementQuantity = jest.fn();

  const { getByText, getAllByText } = render(
    <Cart cartItems={cartItems} handleAddToCart={handleAddToCart} handleDecrementQuantity={handleDecrementQuantity} />
  );

  const item1Name = getByText('Polo');
  const item1Price = getByText('20 ₺');
  const item1DecrementButton = getAllByText('-')[0];
  const item1Quantity = getByText('2');
  const item1AddButton = getAllByText('+')[0];

  const item2Name = getByText('Tesla');
  const item2Price = getByText('15 ₺');
  const item2DecrementButton = getAllByText('-')[1];
  const item2Quantity = getByText('1');
  const item2AddButton = getAllByText('+')[1];

  expect(item1Name).toBeInTheDocument();
  expect(item1Price).toBeInTheDocument();
  expect(item1DecrementButton).toBeInTheDocument();
  expect(item1Quantity).toBeInTheDocument();
  expect(item1AddButton).toBeInTheDocument();

  expect(item2Name).toBeInTheDocument();
  expect(item2Price).toBeInTheDocument();
  expect(item2DecrementButton).toBeInTheDocument();
  expect(item2Quantity).toBeInTheDocument();
  expect(item2AddButton).toBeInTheDocument();
});
