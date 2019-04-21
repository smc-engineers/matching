import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import { openLoginDialog } from '../actions/auth';
import { searchWord } from '../actions/search';

import logo from '../image/icon_180.png';


class Header extends Component {
  constructor(props){
    super(props)
    this.onClickToOpenLoginDialog = this.onClickToOpenLoginDialog.bind(this)
    this.handleToAboutPage = this.handleToAboutPage.bind(this)
    this.state = {
      text: "",
    };
  }

  onClickToOpenLoginDialog(){
    this.props.openLoginDialog()
  }

  async handleToAboutPage(){
    // this.props.history.push({
    //   pathname: '/searchresult',
    //   state: { searchword: this.state.text }
    // })
    await this.props.searchWord()
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
          <button type="submit"  name='action' value='send' onClick={this.handleToAboutPage}>検索</button>
        </p>
        {/* <p>{this.state.text}</p> */}
      </header>
    )
  }
}

const mapStateToProps = state => ({
  isShowLoginDialog: state.auth.isShowLoginDialog
})

const mapDispatchToProps = ({ searchWord, openLoginDialog })

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
