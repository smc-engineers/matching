import React, { Component } from 'react';
//import logo from './image/logo.svg';
import logo from './image/icon_300.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      pass:""
    };
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <p className="App-intro">
          
          <input type="text" value={ this.state.id } placeholder='メールアドレス'
            onChange={e => {this.setState({id: e.target.value})}}/>
          <br/>
          <input type="password" value={ this.state.pass } placeholder='パスワード'
            onChange={e => {this.setState({pass: e.target.value})}}/>
          <br/>
          <input type="checkbox" />次回から自動でログイン
          <br/>
          <button type="submit"  name='action' value='send'>ログイン</button>
          </p>
          <br/>
          <a href="https://www.google.co.jp/">パスワードを忘れた場合</a>
          <br/>
          <a href="https://www.yahoo.co.jp/">新規アカウント作成</a>
          
          <p>{this.state.id}</p>
          <p>{this.state.pass}</p>
        </header>
        
      </div>
    );
    
  }
}

export default App;
