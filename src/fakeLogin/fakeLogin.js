/**
 * Created by albertogiovanelli on 15/05/18.
 */
import jwt from 'jsonwebtoken';

export const fakeLogin = async ({username, password}) => {
    if (username === 'alberto' && password === 'prova') {
        return await jwt.sign({username,password}, 'digitalgarage');
    } else {
        throw new Error('Failed to login');
    }
};

export const getData = (accessToken) => {
    return jwt.verify(accessToken, 'digitalgarage');
};