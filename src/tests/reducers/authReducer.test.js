/**
 * Created by albertogiovanelli on 20/05/18.
 */
import {authReducer, initialState} from '../../reducers/auth/authReducer';

test('should test the default state', () => {
    const state = authReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual(initialState);
});

test('should test the LOGIN state', () => {
    const action = {
        type: 'LOGIN',
        data: {
            accessToken: 'dnjdnvcoecnowbveosdhvowrhgrufghosrhg'
        }
    };
    const state = authReducer(undefined,action);
    expect(state).toEqual({
        isUserLogged: true,
        accessToken: expect.any(String),
    });
});

test('should test the LOGOUT state', () => {
    const state = authReducer(undefined, {type: 'LOGOUT'});
    expect(state).toEqual(initialState);
});