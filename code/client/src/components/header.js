import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import '../styles/style.css'
import { PiNotepad } from "react-icons/pi";

export default class Header extends React.Component {
  render() {
    return (
        <header>
            <div class="logo">
                <PiNotepad />
                <span class="name">NoteBuddy</span>
            </div>
            <button class="about">О нас</button>
        </header>
    );
  }
}