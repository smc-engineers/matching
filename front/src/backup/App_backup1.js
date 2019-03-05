import React, { Component } from 'react';
//import logo from './image/logo.svg';
import logo from './image/icon_300.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p className="App-intro">
          今何してる？
          <input type="text" value={ this.state.text }
            onChange={e => {this.setState({text: e.target.value})}}/>
          </p>
          <p>{this.state.text}</p>
        </header>
        
      </div>
    );
    
  }
}

export default App;
