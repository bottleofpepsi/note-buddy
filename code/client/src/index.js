import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './styles/style.css'
import Home from './components/home';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

class Root extends React.Component {
  render() {
    return (
        <Home />
    );
  }
}

root.render(<Root />);