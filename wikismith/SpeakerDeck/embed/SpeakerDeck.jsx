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
      <div className="speakerdeck-embed" data-id={this.props.content['data-id']}>
        Loading Slides ...
      </div>
    );
  }
}

module.exports = EmbedSpeakerDeck;
