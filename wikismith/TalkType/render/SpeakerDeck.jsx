import React from 'react';
import makeAsyncScriptLoader from "react-async-script";

class SpeakerDeck extends React.Component {

  callsACallback(fn) {
    fn();
  }

  render() {
    return <span/>;
  }

}

module.exports = SpeakerDeck;


const MockedComponent = React.createClass({
  displayName: "MockedComponent",

  callsACallback(fn) {
    fn();
  },

  render() {
    return <span/>;
  }
});

let ComponentWrapper = makeAsyncScriptLoader(MockedComponent, "http://example.com", {
  exposeFuncs: ["callsACallback"]
});
let instance = ReactTestUtils.renderIntoDocument(
  <ComponentWrapper />
);
instance.callsACallback(function () { console.log("Called from child", this.constructor.displayName); });
