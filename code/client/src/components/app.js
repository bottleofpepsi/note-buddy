import React from 'react';
import '../styles/style.css'

import Section from './section';
import CurrSection from './currsection';
import SectionList from './sectionlist';

export default class App extends React.Component {
  render() {
    return (
        <div className="app">
            <SectionList />
            <CurrSection />
        </div>
    );
  }
}