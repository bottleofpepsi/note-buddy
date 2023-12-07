import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import '../styles/style.css'
import { LiaGlobeEuropeSolid } from "react-icons/lia";

export default class About extends React.Component {
  render() {
    return (
        <div className="about-info">
            <h1>О нас</h1>
            <div className="git-wrapper">
                <div className="github">
                    <h2 className="name">Front-end</h2>
                    <a href='https://github.com/bottleofpepsi' target='_blank'>https://github.com/bottleofpepsi</a>
                </div>
                <div className="vl"></div>  
                <div className="github">
                    <h2 className="name">Back-end</h2>
                    <a href='https://github.com/Moledium' target='_blank'>https://github.com/Moledium</a>
                </div>
            </div>
        </div>
    );
  }
}