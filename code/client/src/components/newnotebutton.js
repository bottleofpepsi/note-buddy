import React from 'react';
import '../styles/style.css'

import { LiaPlusSolid } from "react-icons/lia";

export default class NewNoteButton extends React.Component {
  render() {
    return (
        <div className="new-note" onClick={() => this.props.add()}>
            <LiaPlusSolid />
        </div>
    );
  }
}