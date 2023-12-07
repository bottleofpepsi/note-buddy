import React from 'react';
import '../styles/style.css'
import Section from './section';

import { LiaPlusSolid } from "react-icons/lia";
import NewSectionButton from './newsectionbutton';

export default class SectionList extends React.Component {
  render() {
    return (
        <div className="section-list">
            <Section text="Раздел"/>
            <Section text="Раздел"/>
            <NewSectionButton />
        </div>
    );
  }
}