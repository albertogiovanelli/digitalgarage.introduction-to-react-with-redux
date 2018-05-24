import React, {Component} from 'react';
import logo from './logo.svg';
import './css/style.css';
import dg from './img/digital-garage-logo.png';
import favicon from './img/favicon.png';
import './App.css';
import Button from './components/Button/Button';
import LoginPage from './scenes/LoginPage/LoginPage';
import AppRouter from './routers/AppRouter';

export class App extends Component {
    render() {
        return (
            <div>
                <AppRouter/>
            </div>);
    }
}

export default App;
