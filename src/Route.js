/**
 * Created by albertogiovanelli on 15/05/18.
 */
import React from 'react';
import LoginPage from "./scenes/LoginPage/LoginPage";
import Welcome from "./scenes/Welcome/Welcome";
import {Route,Router} from 'react-router-dom';


export const AppRouter = () => {
    return (
        <div>
            <Route exact path="/" component={LoginPage}/>
            <Route path="/welcome" component={Welcome}/>
        </div>
    )
};