import React from 'react';
import { Router, Route, hashHistory, Redirect } from 'dva/router';
import Menu from './routes/menu.jsx';
import MenuSelect from './routes/menuSelect.jsx';
import IndexPage from './routes/IndexPage.jsx';

const RouteFn = (val) => {
  const RouteArr = [];
  val.forEach((item, key) => {
    RouteArr.push(<Route path={item.Path} component={item.Component} key={key} />);
  });
  return RouteArr;
};

function RouterConfig() { // <Route path="/"  exact render={() => (<Redirect to="/index/web" />)}/>
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Menu}>
        <Route path="/index" component={MenuSelect}>
          {RouteFn(IndexPage)}
        </Route>
      </Route>
    </Router>
  );
}

export default RouterConfig;

