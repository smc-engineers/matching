import React, { Component } from 'react';
//import logo from './image/logo.svg';
import logo from './image/icon_300.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <p className="App-intro">
          
          <input type="text" value={ this.state.text } placeholder='曲名、作曲者名を記入してください'
            onChange={e => {this.setState({text: e.target.value})}}/>
          <button type="submit"  name='action' value='send'>検索</button>
          </p>
          「キャッチコピー」
          <br/>
          <a href="https://www.google.co.jp/">アプリについて</a>
          <a href="https://www.yahoo.co.jp/">製作者について</a>
          <a href="https://www.yahoo.co.jp/">利用規約</a>
          <a href="https://www.yahoo.co.jp/">お問い合わせ</a>
          <a href="https://www.yahoo.co.jp/">プライバシーポリシー</a>

          
          <p>{this.state.text}</p>
        </header>
        
      </div>
    );
    
  }
}

export default App;
