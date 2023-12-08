import React from 'react';
import '../styles/style.css'

import SignUp from '../components/signup';
import LogIn from '../components/login';
import Header from './header';
import HomeInfo from './homeinfo';
import About from './about';
import App from './app';


export default class Home extends React.Component {
    render() {
        return (
            <div className="app-wrapper">
                <Header />
                {/* <HomeInfo />
                <About /> */}
                <App />
            </div>
        );
    }
}