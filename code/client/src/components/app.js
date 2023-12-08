import React from 'react';
import '../styles/style.css'

import CurrSection from './currsection';
import SectionList from './sectionlist';

export default class App extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        newNote: false,
        newSection: false,
        currentWindow: 1,
        sections: [
          {
            id: 1,
            title: "Финансы",
            description: "денежки денежки денежки денежки денежки",
            notes: [
              {
                id: 1,
                title: "+ Денежки",
                description: "лабы по сифо 30 рублей штука",
                deadline: ""
              },
              {
                id: 2,
                title: "- Денежки",
                description: "купить ардуинку",
                deadline: "01-01-2024"
              }
            ]
          },
          {
            id: 2,
            title: "Учёба",
            description: "крутимся, вертимся, обкашливаем вопросики",
            notes: [
              {
                id: 1,
                title: "Доделать то",
                description: "Активно доделываем то",
                deadline: ""
              },
              {
                id: 2,
                title: "Доделать это",
                description: "Активно доделываем это",
                deadline: ""
              }
            ]
          }
        ]
      }

      this.changeSection = this.changeSection.bind(this);
      this.deleteSection = this.deleteSection.bind(this);
      this.deleteNote = this.deleteNote.bind(this);
      this.addNote = this.addNote.bind(this);
      this.addSection = this.addSection.bind(this);
      this.saveNote = this.saveNote.bind(this);
      this.saveSection = this.saveSection.bind(this);
    }

    changeSection(i){
      this.setState({currentWindow: i});
    }

    deleteSection(i){
      this.setState({sections: this.state.sections.filter(el => el !== i)});
    }

    deleteNote(i){
      let _sections = this.state.sections;
      _sections[this.state.sections.findIndex(this.current)].notes = _sections[this.state.sections.findIndex(this.current)].notes.filter(el => el !== i);
      this.setState({sections: _sections});
    }

    addNote(){
      this.setState({newNote: true})
    }

    addSection(){
      this.setState({newSection: true})
    }

    saveNote(i){
      let _sections = this.state.sections;
      let _id = _sections[this.state.sections.findIndex(this.current)].notes.length;
      _sections[this.state.sections.findIndex(this.current)].notes.push({
        id: _id + 1,
        title: i.title,
        description: i.description,
        deadline: i.deadline
      });
      this.setState({
        newNote: false,
        sections: _sections
      })
    }

    saveSection(i){
      let _sections = this.state.sections;
      _sections.push({
        id: _sections.length + 1,
        title: i.title,
        description: i.description,
        notes: []
      })
      this.setState({
        sections: _sections,
        newSection: false
      })
    }

    current = el => el.id === this.state.currentWindow;

    render() {
      return (
          <div className="app">
              <SectionList 
                  sections={this.state.sections}
                  change={this.changeSection} 
                  add={this.addSection} 
                  delete={this.deleteSection}
              />
              <CurrSection 
                  section={this.state.sections[this.state.sections.findIndex(this.current)]} 
                  newNote={this.state.newNote} 
                  newSection={this.state.newSection} 
                  add={this.addNote} 
                  delete={this.deleteNote}
                  saveNote={this.saveNote}
                  saveSection={this.saveSection}
              />
          </div>
      );
    }
}