/**
 * Created by albertogiovanelli on 20/05/18.
 */
import {login, logout} from '../../actions/auth/authAction';

test('should set up login action object', () => {
    const action = login({accessToken: 'dnjdnvcoecnowbveosdhvowrhgrufghosrhg'});
    expect(action).toEqual({
        type: 'LOGIN',
        data: {accessToken: expect.any(String)}
    })
});

test('should set up login action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT',
        data: undefined
    })
});