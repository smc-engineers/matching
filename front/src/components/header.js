import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { openLoginDialog } from '../actions/auth';

import logo from '../image/icon_180.png';


class Header extends Component {
  constructor(props){
    super(props)
    this.onClickToOpenLoginDialog = this.onClickToOpenLoginDialog.bind(this)
    this.state = {
      text: "",
    };
  }

  onClickToOpenLoginDialog(){
    this.props.openLoginDialog()
  }

  render(){
    return(
      <header className="App-header">
        <div className="header-left">
          <img src={logo} alt="logo" />
          <Link to={'/'}>マッチング</Link>
        </div>
        <div className="header-right">
          <input className="cinnamon-btn" type="button" value="ログイン" onClick={() => this.onClickToOpenLoginDialog()} />
        </div>

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

const mapStateToProps = state => ({
  isShowLoginDialog: state.auth.isShowLoginDialog
})

const mapDispatchToProps = ({ openLoginDialog })

export default connect(mapStateToProps, mapDispatchToProps)(Header)
