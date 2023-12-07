import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import '../styles/style.css'

import SignUp from '../components/signup';
import LogIn from '../components/login';
import Header from './header';
import HomeInfo from './homeinfo';

export default class Home extends React.Component {
  render() {
    return (
        <div>
            <Header />
            <HomeInfo className="info-wrapper"/>
        </div>
    );
  }
}