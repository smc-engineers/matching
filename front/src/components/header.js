import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../image/icon_300.png';


class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: "",
    };
  }

  render(){
    return(
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>タイトルロゴ</p>
        
        <p className="App-intro">
          <input type="text" value={ this.state.text } placeholder='曲名、作曲者名を記入してください'
            onChange={e => {this.setState({text: e.target.value})}}/>
          <button type="submit"  name='action' value='send'>検索</button>
        </p>
        <p>{this.state.text}</p>
      </header>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = ({})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
