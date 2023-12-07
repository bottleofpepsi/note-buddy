import React from 'react';
import '../styles/style.css'
import Section from './section';

import { LiaPlusSolid } from "react-icons/lia";

export default class NewSectionButton extends React.Component {
  render() {
    return (
        <div className="new-section">
            <LiaPlusSolid />
        </div>
    );
  }
}