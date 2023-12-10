import React from 'react';
import '../styles/style.css'

import NoteList from './notelist';
import EmptySectionPlaceholder from './emptysectionplaceholder';
import AddNote from './addnote';
import AddSection from './addsection';

export default class CurrSection extends React.Component {
    render() {
        if (this.props.section)
            return (
                <div className="curr-section">
                    <div className="section-info">
                        <h1 className="section-name">{this.props.section.title}</h1>
                        <p className="section-desc">
                            {this.props.section.description}
                        </p>
                    </div>
                    {this.props.newNote && (<AddNote save={this.props.saveNote}/>)}
                    {this.props.newSection && (<AddSection save={this.props.saveSection}/>)}
                    <NoteList add={this.props.add} delete={this.props.delete} notes={this.props.section.notes} />
                </div>
            );
        
        return <EmptySectionPlaceholder save={this.props.saveSection} newSection={this.props.newSection}/>
    }
}