import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';
import Dashboard from '../../scenes/Dashboard/Dashboard';

test('should render Dashboard correctly', () => {
    const wrapper = shallow(<Dashboard/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});