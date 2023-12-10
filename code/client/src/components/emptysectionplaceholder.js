import React from 'react';
import '../styles/style.css'

import AddSection from './addsection';

export default class EmptySectionPlaceholder extends React.Component {
    render() {
        return (
            <div className="empty-placeholder">
                    {this.props.newSection && (<AddSection save={this.props.save}/>)}
            </div>
        )
    }
}