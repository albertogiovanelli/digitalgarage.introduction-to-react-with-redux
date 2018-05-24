import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

test('should render App correctly', () => {
  const wrapper = shallow(<App/>);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
