import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home', () => {
  describe('renders correctly', () => {
    it('renders components correctly', () => {
      expect(Home).toMatchSnapshot();
    });
  })
})