import React from 'react';
import '../styles/style.css'

import Section from './section';
import NewSectionButton from './newsectionbutton';

export default class SectionList extends React.Component {
    render() {
      return (
          <div className="section-list">
              {this.props.sections.map((el) => {
                  return <Section 
                            change={this.props.change} 
                            delete={this.props.delete} 
                            section={el} 
                            key={el.id} 
                        />
              })}
              <NewSectionButton add={this.props.add} />
          </div>
      );
    }
}