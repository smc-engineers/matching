import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Top from './components/top';

export default class Routes extends Component{
  render(){
    return(
      <Switch>
        <Route exact path='/' component={Top} />
      </Switch>
    );
  }
}
