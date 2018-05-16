/**
 * Created by albertogiovanelli on 15/05/18.
 */
import React, {Component} from 'react';
import Button from '../../components/Button/Button';
import {fakeLogin, getData} from '../../mocks/fakeLogin';
import {getDataSuccess} from '../../redux/actions/auth/authAction';
import { connect } from 'react-redux'


class LoginPage extends React.Component {
    constructor() {
        super();
        this.onHandleChange = this.onHandleChange.bind(this);
    }

    state = {
        username : '',
        password : ''
    };

    async onSubmit() {
       console.log("final state", this.state);
       try {
           const jwt = await fakeLogin(this.state);
           if (typeof jwt === 'string') {

               this.props.dispatch(getDataSuccess({
                   accessToken:jwt
               }));

               const data = await this.getData(jwt);
           }
       } catch (err) {
           console.log(`Something went wrong ${err}`);
       }
    };

    async getData(jwt) {
        const data = await getData(jwt);
        console.log("data", data);
    }

    onHandleChange(e) {
        const {name, value} = e.target;
        this.setState({
            [name]:value
        }, () => console.log(this.state));
    }

    render() {
        return (
            <form className="login__container">
                <input type="text" className="login__container--username" name="username" placeholder="Username..." onChange={this.onHandleChange}/>
                <input type="password" className="login__container--password" name="password" placeholder="Password..." onChange={this.onHandleChange}/>
                <Button label="Login" className="login__container--button" onClick={() => this.onSubmit()}>Login</Button>
            </form>
        );
    }
}


export default connect()(LoginPage);