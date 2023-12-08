import React from 'react';
import '../styles/style.css';

import { PiNotepad } from "react-icons/pi";

export default class Header extends React.Component {
  render() {
    return (
        <header>
            <div className="logo">
                <PiNotepad />
                <span className="name">NoteBuddy</span>
            </div>
            <button className="about">О нас</button>
        </header>
    );
  }
}