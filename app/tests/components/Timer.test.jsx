const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const Timer = require('Timer');

describe('Timer', () => {

  it('should exist', () => {
    expect(Timer).toExist();
  });

  it('should start timer on started status', () => {
    let timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.handleStatusChange('started');

    expect(timer.state.count).toBe(0);
    setTimeout((done)=> {
      expect(timer.state.timerStatus).toBe('started');
      expect(timer.state.timer).toBe(1);
      done();
    }, 1000);
  });

  it('should pause timer on paused status', () => {
    let timer = TestUtils.renderIntoDocument(<Timer/>);

    timer.setState({count: 10});
    timer.handleStatusChange('started');
    timer.handleStatusChange('paused');

    setTimeout((done)=> {
      expect(timer.state.timerStatus).toBe('paused');
      expect(timer.state.timer).toBe(10);
      done();
    }, 1000);
  });

  it('should stop timer on stopped status', () => {
    let timer = TestUtils.renderIntoDocument(<Timer/>);

    timer.setState({count: 10});
    timer.handleStatusChange('started');
    timer.handleStatusChange('stopped');

    setTimeout((done)=> {
      expect(timer.state.timerStatus).toBe('stopped');
      expect(timer.state.count).toBe(10);
      done();
    }, 1000);
  });

});
