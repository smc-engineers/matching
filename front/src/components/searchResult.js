import React, { Component } from 'react';
import { connect } from 'react-redux';

class Searchresult extends Component{

  render(){
    return(
      <div className="searchresult">{this.props.location.state.searchword}</div>
    )
  }
}

const mapDispatchToProps = ({})

export default connect (null, mapDispatchToProps)(Searchresult)
