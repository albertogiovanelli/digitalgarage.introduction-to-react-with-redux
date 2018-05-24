import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';
import {LoginPage} from '../../scenes/LoginPage/LoginPage';

test('should render LoginPage correctly', () => {
    const wrapper = shallow(<LoginPage/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});