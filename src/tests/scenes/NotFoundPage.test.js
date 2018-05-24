import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';
import NotFoundPage from '../../scenes/NotFoundPage/NotFoundPage';

test('should render Dashboard correctly', () => {
    const wrapper = shallow(<NotFoundPage/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});