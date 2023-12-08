import React from 'react';
import '../styles/style.css'

import { LiaPlusSolid } from "react-icons/lia";

export default class NewSectionButton extends React.Component {
  render() {
    return (
        <div className="new-section">
            <LiaPlusSolid onClick={() => this.props.add()}/>
        </div>
    );
  }
}