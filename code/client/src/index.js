import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './styles/style.css'

import SignUp from './components/signup';
import LogIn from './components/login';
import AddNote from './components/addnote';
import AddSection from './components/addsection';
import Home from './components/home';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

root.render(<App />);