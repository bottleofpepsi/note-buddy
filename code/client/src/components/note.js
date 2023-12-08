import React from 'react';

import { IoTrashOutline } from "react-icons/io5";

class Note extends React.Component {
    render() {
        return (
            <div className="note">
                <div className="note-header">
                    <h3>{this.props.note.title}</h3>
                    <IoTrashOutline onClick={(e) => {
                        e.stopPropagation();
                        this.props.delete(this.props.note);
                    }}/>
                </div>
                <div className="note-body">
                    <p>
                        {this.props.note.description}
                    </p>
                    <div className="note-deadline">
                        {this.props.note.deadline && "Дэдлайн: " + this.props.note.deadline}
                    </div>
                </div>
            </div>
        );
  }
}

export default Note