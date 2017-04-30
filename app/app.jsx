const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const Main = require('Main');
const Timer = require('Timer');
const Countdown = require('Countdown');


// foundation styles
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// custom scss
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Timer}/>
      <Route path="/countdown" component={Countdown}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
