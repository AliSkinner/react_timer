const React = require('react');
const Navigation = require('Navigation');

const Main = (props) => {
  return (
    <div>
      <Navigation />
      <div>
        <div>
          <p>Main.jsx rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
