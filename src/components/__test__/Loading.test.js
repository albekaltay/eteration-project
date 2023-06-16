import React from 'react';
import { render } from '@testing-library/react';
import Loading from '../loadings/Loading';
import '@testing-library/jest-dom'


test('Loading component renders correctly', () => {
  const { getByText } = render(<Loading />);
  const loadingText = getByText('Yükleniyor...');
  
  expect(loadingText).toBeInTheDocument();
});