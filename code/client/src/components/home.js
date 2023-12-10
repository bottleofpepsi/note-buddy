import React from 'react';
import '../styles/style.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import SignUp from '../components/signup';
import LogIn from '../components/login';
import Header from './header';
import HomeInfo from './homeinfo';
import About from './about';
import App from './app';


export default class Home extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            authorized: false
        }
    }
    render() {
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <Header />
                    <Routes>
                        <Route path='/' element={<HomeInfo />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/app' element={<App />} />
                    </Routes>
                    {/* <SignUp /> */}
                </div>
            </BrowserRouter>
        );
    }
}