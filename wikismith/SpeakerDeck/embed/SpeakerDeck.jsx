import React from 'react';
import styles from './SpeakerDeck.scss';

class EmbedSpeakerDeck extends React.Component {

  componentDidMount() {
    const script = document.createElement('script');
    script.src = '//speakerdeck.com/assets/embed.js';
    script.async = 1;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div className={styles.root}>
        <div className="speakerdeck-embed" data-id={this.props.content['data-id']}>
          Loading Slides ...
        </div>
      </div>
    );
  }
}

module.exports = EmbedSpeakerDeck;
