import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import '../styles/style.css'
import { LiaGlobeEuropeSolid } from "react-icons/lia";

export default class HomeInfo extends React.Component {
  render() {
    return (
        <div className="home-info">
            <div className="info-text">
                <h1 className="name">NoteBuddy</h1>
                <p>
                    NoteBuddy – лучшее приложение<br />для ведения заметок
                </p>
                <span>Почему бы не<button>попробовать его прямо сейчас</button>?</span>
            </div>
            <div className="vl"></div>
            <LiaGlobeEuropeSolid className="globe-img"/>
        </div>
    );
  }
}