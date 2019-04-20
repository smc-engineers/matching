import React, { Component } from 'react';

import Routes from './Routes';
import Header from './components/header';
import Login from './components/dialog/login';
import Footer from './components/footer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Login />
        <Routes />
        <Footer />       
      </div>
    );
  }
}

export default App;
