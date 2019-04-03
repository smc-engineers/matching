import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Top from './components/top';
import SearchResult from './components/searchResult';


export default class Routes extends Component{
  render(){
    return(
      <Switch>
        <Route exact path='/' component={Top} />
        <Route exact path='/searchresult' component={SearchResult} />
      </Switch>
    );
  }
}
