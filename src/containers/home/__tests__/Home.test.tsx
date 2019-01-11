import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../Home';

it('renders correctly', () => {
  const button = renderer.create(<Home />).toJSON();
  expect(button).toMatchSnapshot();
});
