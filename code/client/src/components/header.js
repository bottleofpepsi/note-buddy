import React from 'react';
import '../styles/style.css';
import { Link } from 'react-router-dom';

import { PiNotepad } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";

export default class Header extends React.Component {
  render() {
    return (
        <header>
          <Link to="/">
            <div className="logo">
                <PiNotepad />
                <span className="name">NoteBuddy</span>
            </div>
          </Link>
            <div className="header-nav">
              <Link to="/app"><FaRegUser className="profile"/></Link>
              <Link to="/about"><button className="about">О нас</button></Link>
            </div>
        </header>
    );
  }
}