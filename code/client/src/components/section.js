import React from 'react';
import '../styles/style.css'

import { IoTrashOutline } from "react-icons/io5";

class Section extends React.Component {
    render() {
        return (
            <div className="section">
                {this.props.text}
                <IoTrashOutline />
            </div>
        );
  }
}

export default Section