const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const Main = require('Main');

// foundation styles
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// custom scss
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
    </Route>
  </Router>,
  document.getElementById('app')
);