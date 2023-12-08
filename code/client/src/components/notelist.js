import React from 'react';

import NewNoteButton from './newnotebutton';
import Note from './note';

export default class NoteList extends React.Component {
    render() {
        return (
            <div className="note-list">
                {(this.props.notes || []).map((el) => {
                    return <Note delete={this.props.delete} note={el} key={el.id} />
                })}
                <NewNoteButton add={this.props.add}/>
            </div>
        );
    }
}