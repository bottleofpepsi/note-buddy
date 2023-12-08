import React from 'react';
import '../styles/style.css'

import { IoTrashOutline } from "react-icons/io5";

class Section extends React.Component {
    render() {
        return (
            <div className="section" onClick={() => this.props.change(this.props.section.id)}>
                {this.props.section.title}
                <IoTrashOutline onClick={(e) => {
                    e.stopPropagation();
                    this.props.delete(this.props.section);
                }}/>
            </div>
        );
  }
}

export default Section