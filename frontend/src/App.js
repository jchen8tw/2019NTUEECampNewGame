import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import DashBoard from './Container/Dashboard'
import Login from './Container/Login'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={DashBoard} />
          <Route exact path='/login' component={Login} />
          <Route path='/login/:stagename?' component={Login}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
