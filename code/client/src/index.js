import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './styles/style.css'

import SignUp from './components/signup';
import LogIn from './components/login';
import AddNote from './components/addnote';
import AddSection from './components/addsection';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <SignUp />
        <LogIn />
        <AddNote />
        <AddSection /> */}
      </div>
    );
  }
}

root.render(<App />);