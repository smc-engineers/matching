import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component{
  render(){
    return(
      <div>
          <a href="https://www.google.co.jp/">アプリについて</a>
          <a href="https://www.yahoo.co.jp/">製作者について</a>
          <a href="https://www.yahoo.co.jp/">利用規約</a>
          <a href="https://www.yahoo.co.jp/">お問い合わせ</a>
          <a href="https://www.yahoo.co.jp/">プライバシーポリシー</a>
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, null)(Footer)
