import React from 'react';

class EmbedSpeakerDeck extends React.Component {

  componentDidMount() {
    const script = document.createElement('script');
    script.src = '//speakerdeck.com/assets/embed.js';
    script.async = 1;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div className="speakerdeck-embed" data-id="5305bc1ee0854460a21a9fb6a81bd6b9">
        Loading Slides ... 
      </div>
    );
  }
}

module.exports = EmbedSpeakerDeck;
