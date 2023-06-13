import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../base/Button';
import '@testing-library/jest-dom'


test('Button component renders correctly', () => {
  const label = 'Submit';
  const { getByRole } = render(<Button label={label} />);
  const button = getByRole('button');

  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent(label);
});

test('Button component calls onClick event handler', () => {
  const onClick = jest.fn();
  const { getByRole } = render(<Button label="Submit" onClick={onClick} />);
  const button = getByRole('button');
  
  fireEvent.click(button);
  expect(onClick).toHaveBeenCalledTimes(1);
});