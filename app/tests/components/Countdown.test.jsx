const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jQuery');

const Countdown = require('Countdown');

describe('Countdown', () => {

  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('Countdown', () => {

    it('should call set state to started and countdown', (done) => {
      let countdown= TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);

    });

    it('should not set state to negative numbers', (done) => {
      let countdown= TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(1);

      expect(countdown.state.count).toBe(1);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001);

    });

    it('should pause countdown on paused status', () => {
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('paused');

      setTimeout((done) => {
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.countdownStatus).toBe('paused');
        done();
      }, 1001)
    });

    it('should stop countdown on stopped status', () => {
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('stopped');

      setTimeout((done) => {
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.countdownStatus).toBe('stopped');
        done();
      }, 1001)
    });

  });




  // it('should not call onSetCountdown if invalid seconds entered', () => {
  //   let spy = expect.createSpy();
  //   let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
  //   let $el = $(ReactDOM.findDOMNode(countdownForm));
  //
  //   countdownForm.refs.seconds.value = 'invalid stuff';
  //   TestUtils.Simulate.submit($el.find('form')[0]);
  //
  //   expect(spy).toNotHaveBeenCalled();
  // });


});
