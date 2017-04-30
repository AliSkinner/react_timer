const React = require('react');
const {IndexLink, Link} = require('react-router');

const Navigation = () => {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer App</li>
            <li className="menu-text">
              <IndexLink to='/' activeClassName="active-link" >Timer</IndexLink>
            </li>
            <li className="menu-text">
              <Link to='/countdown' activeClassName="active-link" >Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text"><a href="https://github.com/AliSkinner" target="_blank">View on Github</a></li>
          </ul>
        </div>
      </div>
    );
};


module.exports = Navigation;
