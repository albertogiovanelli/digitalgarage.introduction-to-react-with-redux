/**
 * Created by albertogiovanelli on 15/05/18.
 */
import React, {Component} from 'react';
import Button from '../../components/Button/Button';
import {fakeLogin, getData} from '../../fakeLogin/fakeLogin';
import {login} from '../../actions/auth/authAction';
import {connect} from 'react-redux';


export class LoginPage extends React.Component {
    constructor() {
        super();
        this.onHandleChange = this.onHandleChange.bind(this);
    }

    state = {
        username: '',
        password: ''
    };

    async onSubmit(e) {
        e.preventDefault();
        try {
            const jwt = await fakeLogin(this.state);
            this.props.dispatch(login({
                accessToken: jwt
            }));
            this.props.history.push('/dashboard');
            const data = await this.getData(jwt);
            console.log("data", data);
        } catch (err) {
            console.log(`Something went wrong ${err}`);
        }
    };

    async getData(jwt) {
        return getData(jwt);
    }

    onHandleChange(e) {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        }, () => console.log(this.state));
    }

    render() {
        return (
            <div className="login">
                <form className="login__container" onSubmit={(e) => this.onSubmit(e)}>
                    <input type="text" className="login__container--username" name="username" placeholder="Username..."
                           onChange={this.onHandleChange}/>
                    <input type="password" className="login__container--password" name="password"
                           placeholder="Password..." onChange={this.onHandleChange}/>
                    <Button type="submit" label="Login" className="login__container--button"
                    >Login</Button>
                </form>
            </div>
        );
    }
}


export default connect()(LoginPage);