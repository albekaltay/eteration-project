import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RadioButton from '../base/RadioButton';
import '@testing-library/jest-dom'

test('RadioButton component renders correctly', () => {
  const label = 'Sort';
  const id = 'sort';
  const name = 'sortRadioButtons';
  const value = 'SORT';

  const { getByLabelText } = render(
    <RadioButton label={label} id={id} name={name} value={value} />
  );

  const radioButton = getByLabelText(label);

  expect(radioButton).toBeInTheDocument();
  expect(radioButton).toHaveAttribute('id', id);
  expect(radioButton).toHaveAttribute('name', name);
  expect(radioButton).toHaveAttribute('value', value);
});

test('RadioButton component calls onChange event handler', () => {
  const onChange = jest.fn();
  const { getByLabelText } = render(
    <RadioButton label="Sort" id="sort" name="sortRadioButtons" value="SORT" onChange={onChange} />
  );

  const radioButton = getByLabelText('Sort');

  fireEvent.click(radioButton);

  expect(onChange).toHaveBeenCalledTimes(1);
});
