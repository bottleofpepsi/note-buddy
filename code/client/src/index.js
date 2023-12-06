import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import SignUp from './components/signup';
import LogIn from './components/login';
import './styles/style.css'

const root = ReactDOMClient.createRoot(document.getElementById('root'));

class App extends React.Component {
  render() {
    return (
      <div>
        <SignUp />
        <LogIn />
      </div>
    );
  }
}

root.render(<App />);