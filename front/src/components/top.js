import React, { Component } from 'react';
import { connect } from 'react-redux';

class Top extends Component{

  render(){
    return(
      <div className="top">Top Page</div>
    )
  }
}

const mapDispatchToProps = ({})

export default connect (null, mapDispatchToProps)(Top)
