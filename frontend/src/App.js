import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import DashBoard from "./Container/Dashboard";
import Login from "./Container/Login";
import Addpoint from "./Container/Addpoint";
import Commission from "./Container/Commission";
import { Provider } from "react-redux";
import store from "./redux/store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={DashBoard} />
            <Route exact path="/login" component={Login} />
            <Route path="/login/:stagename?" component={Addpoint} />
            <Route path="/commission" component={Commission} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
